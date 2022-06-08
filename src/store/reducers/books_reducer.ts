import { createSlice } from '@reduxjs/toolkit'

import { getBooksTC } from 'store/thunks/books_thunks'
import { BooksInitialStateType } from 'store/types/BooksInitialStateType'
import { convertBookTitle } from 'utils/convertBookTitle'

export const initialState: BooksInitialStateType = {
  books: [],
}

const mainSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBooksTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload.map(book => ({
          ...book,
          title: convertBookTitle(book.title),
        }))
      }
    })
  },
})

export const booksReducer = mainSlice.reducer
