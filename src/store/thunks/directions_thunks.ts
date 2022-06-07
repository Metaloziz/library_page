import { createAsyncThunk } from '@reduxjs/toolkit'

import { directionsAPI } from 'api/directions'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getDirectionsTC = createAsyncThunk(
  'directions/getDirectionsTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await directionsAPI.getDirections()
      if (status === StatusCode.GET_DIRECTIONS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
