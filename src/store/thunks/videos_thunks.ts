import { createAsyncThunk } from '@reduxjs/toolkit'

import { videosAPI } from 'api/video'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getVideosTC = createAsyncThunk(
  'videos/getVideosTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await videosAPI.getVideos()
      if (status === StatusCode.GET_VIDEOS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
