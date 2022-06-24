import { createAsyncThunk } from '@reduxjs/toolkit'

import { booksAPI } from 'api/books'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { BookPostType } from 'store/types/BookPostType'
import { setThunkError } from 'utils'

export const getBooksTC = createAsyncThunk(
  'books/getBooksTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await booksAPI.getBooks()
      if (status === StatusCode.GET_BOOKS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const postBooksTC = createAsyncThunk(
  'books/postBooksTC',
  async (book: BookPostType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await booksAPI.postBook(book)
      if (status === StatusCode.POST_BOOK_SUCCESS) {
        console.log(data)
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
