import { createSlice } from '@reduxjs/toolkit'

import { getAuthorsTC, getAuthorTC } from 'store/thunks/authors_thunks'
import { AuthorInitialStateType } from 'store/types/AuthorInitialStateType'

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
    builder.addCase(getAuthorTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.authors.push(action.payload)
      }
    })
  },
})

export const authorsReducer = mainSlice.reducer
