import { createSlice } from '@reduxjs/toolkit'

import { getAuthorsTC } from 'store/thunks/authors_thunks'
import { AuthorInitialStateType } from 'store/types/AuthorInitialStateType'

export type AuthorType = {
  uuid: string
  full_name: string
}

export const initialState: AuthorInitialStateType = {
  authors: [],
}

const mainSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAuthorsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.authors = action.payload
      }
    })
  },
})

export const authorsReducer = mainSlice.reducer
