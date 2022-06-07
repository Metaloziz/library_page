import { createAsyncThunk } from '@reduxjs/toolkit'

import { authorsAPI } from 'api/authors'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getAuthorsTC = createAsyncThunk(
  'authors/getAuthorsTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await authorsAPI.getAllAuthors()
      if (status === StatusCode.GET_AUTHORS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
