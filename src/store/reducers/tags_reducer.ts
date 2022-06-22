import { createSlice } from '@reduxjs/toolkit'

import { getTagsTC, postTagsTC, updateTagTC } from 'store/thunks/tags_thunks'
import { TagsInitialStateType } from 'store/types/TagsInitialStateType'

export const initialState: TagsInitialStateType = {
  tags: [],
}

const mainSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getTagsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.tags = action.payload
      }
    })

    addCase(postTagsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.tags.push(action.payload)
      }
    })

    addCase(updateTagTC.fulfilled, (state, { payload }) => {
      if (payload?.uuid) {
        state.tags.forEach(tag => {
          if (tag.uuid === payload?.uuid) {
            tag.name = payload?.name
          }
        })
      }
    })
  },
})

export const tagsReducer = mainSlice.reducer
