import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getBooksTC } from 'store/thunks/books_thunks'
import { BooksInitialStateType } from 'store/types/BooksInitialStateType'
import { findElement } from 'utils'
import { convertImagesUrl } from 'utils/convert_images_url'
import { convertTitle } from 'utils/convert_title'

export const initialState: BooksInitialStateType = {
  books: [],
  currentBook: {
    uuid: '',
    title: '',
    direction: {
      uuid: '',
      name: '',
    },
    author: {
      uuid: '',
      full_name: '',
    },
    difficulty: '',
    edition_date: '',
    description: '',
    local_url: '',
    language: '',
    tags: [
      {
        uuid: '',
        name: '',
      },
      {
        uuid: '',
        name: '',
      },
    ],
    image_url: '',
  },
}

const mainSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCurrentBookAC: (state, action: PayloadAction<string>) => {
      state.currentBook = findElement(state.books, action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(getBooksTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload.map(book => ({
          ...book,
          title: convertTitle(book.title),
          image_url: convertImagesUrl(book.image_url),
        }))
      }
    })
  },
})

export const booksReducer = mainSlice.reducer
export const { setCurrentBookAC } = mainSlice.actions
