import { createSlice } from '@reduxjs/toolkit'

import { TagsType } from 'api/tags'
import { getTagsTC } from 'store/thunks/tags_thunks'

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
