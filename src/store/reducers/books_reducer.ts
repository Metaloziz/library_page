import { createSlice } from '@reduxjs/toolkit'

import { getBooksTC } from 'store/thunks/books_thunks'
import { BooksInitialStateType } from 'store/types/BooksInitialStateType'
import { convertBookTitle } from 'utils/convertBookTitle'
import { convertImagesUrl } from 'utils/convertImagesUrl'

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
          image_url: convertImagesUrl(book.image_url),
        }))
      }
    })
  },
})

export const booksReducer = mainSlice.reducer
