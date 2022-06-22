import { createSlice } from '@reduxjs/toolkit'

import { getTagsTC, postTagsTC } from 'store/thunks/tags_thunks'
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
  },
})

export const tagsReducer = mainSlice.reducer
