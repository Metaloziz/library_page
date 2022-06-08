import { createSlice } from '@reduxjs/toolkit'

import { getTagsTC } from 'store/thunks/tags_thunks'
import { TagsType } from 'store/types/TagsType'

export type TagsInitialStateType = {
  tags: TagsType[]
}

export const initialState: TagsInitialStateType = {
  tags: [],
}

const mainSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTagsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.tags = action.payload
      }
    })
  },
})

export const tagsReducer = mainSlice.reducer
