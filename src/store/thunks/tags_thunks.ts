import { createAsyncThunk } from '@reduxjs/toolkit'

import { tagsAPI } from 'api/tags'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getTagsTC = createAsyncThunk('tags/getTagsTC', async (_, { dispatch }) => {
  try {
    dispatch(setIsLoadingStatusAC(true))

    const { data, status } = await tagsAPI.getTags()
    if (status === StatusCode.GET_TAGS_SUCCESS) {
      return data
    }
  } catch (error) {
    setThunkError(dispatch, error as ResponseErrorType)
  } finally {
    dispatch(setIsLoadingStatusAC(false))
  }
})
