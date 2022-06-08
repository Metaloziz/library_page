import { createAsyncThunk } from '@reduxjs/toolkit'

import { booksAPI } from 'api/books'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getBooksTC = createAsyncThunk(
  'books/getBooksTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await booksAPI.getBooks()
      if (status === StatusCode.GET_TAGS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
