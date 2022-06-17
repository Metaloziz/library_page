import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getAuthorsTC, getAuthorTC, updateAuthorTC } from 'store/thunks/authors_thunks'
import { AuthorInitialStateType } from 'store/types/AuthorInitialStateType'
import { AuthorType } from 'store/types/AuthorType'

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
    builder.addCase(
      updateAuthorTC.fulfilled,
      (state, action: PayloadAction<AuthorType | undefined>) => {
        if (action.payload?.uuid) {
          state.authors.forEach(author => {
            if (author.uuid === action.payload?.uuid) {
              author.full_name = action.payload?.full_name
            }
          })
        }
      },
    )
  },
})

export const authorsReducer = mainSlice.reducer
