import { createAsyncThunk } from '@reduxjs/toolkit'

import { directionsAPI } from 'api/directions'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { DirectionNameType } from 'store/types/DirectionNameType'
import { setThunkError } from 'utils'
import { separateId } from 'utils/separate_id'

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

export const getDirectionTC = createAsyncThunk(
  'directions/getDirectionTC',
  async (directionId: string, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await directionsAPI.getDirection(directionId)
      if (status === StatusCode.GET_DIRECTION_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const postDirectionsTC = createAsyncThunk(
  'directions/postDirectionsTC',
  async (directionName: DirectionNameType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await directionsAPI.postDirection(directionName)
      if (status === StatusCode.POST_DIRECTIONS_SUCCESS) {
        const directionId = separateId(data.infoMsg)
        dispatch(getDirectionTC(directionId))
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
