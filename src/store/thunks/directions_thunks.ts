import { createAsyncThunk } from '@reduxjs/toolkit'

import { directionsAPI } from 'api/directions'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { DirectionNameType } from 'store/types/DirectionNameType'
import { DirectionType } from 'store/types/DirectionType'
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

export const updateDirectionTC = createAsyncThunk(
  'directions/updateDirectionTC',
  async (direction: DirectionType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await directionsAPI.updateDirection(direction)
      if (status === StatusCode.UPDATE_DIRECTION_SUCCESS) {
        return direction
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const deleteDirectionTC = createAsyncThunk(
  'directions/deleteDirectionTC',
  async (directionId: string, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await directionsAPI.deleteDirection(directionId)
      if (status === StatusCode.DELETE_DIRECTION_SUCCESS) {
        return directionId
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
