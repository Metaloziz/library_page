import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  deleteAuthorTC,
  getAuthorsTC,
  postAuthorTC,
  updateAuthorTC,
} from 'store/thunks/authors_thunks'
import { AuthorInitialStateType } from 'store/types/AuthorInitialStateType'
import { AuthorType } from 'store/types/AuthorType'

export const initialState: AuthorInitialStateType = {
  authors: [],
}

const mainSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAuthorsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.authors = action.payload
      }
    })

    addCase(
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

    addCase(deleteAuthorTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.authors = state.authors.filter(author => author.uuid !== action.payload)
      }
    })

    addCase(postAuthorTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.authors.push(action.payload)
      }
    })
  },
})

export const authorsReducer = mainSlice.reducer
