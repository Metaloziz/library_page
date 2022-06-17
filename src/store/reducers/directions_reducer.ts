import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  deleteDirectionTC,
  getDirectionsTC,
  getDirectionTC,
  updateDirectionTC,
} from 'store/thunks/directions_thunks'
import { DirectionsInitialStateType } from 'store/types/DirectionsInitialStateType'
import { DirectionType } from 'store/types/DirectionType'

export const initialState: DirectionsInitialStateType = {
  directions: [{ uuid: '0', name: '' }],
  activeDirection: '0',
}

const mainSlice = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    setDirectionAC: (state, action) => {
      state.activeDirection = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getDirectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.directions = action.payload
      }
    })
    builder.addCase(getDirectionTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.directions.push(action.payload)
      }
    })
    builder.addCase(
      updateDirectionTC.fulfilled,
      (state, action: PayloadAction<DirectionType | undefined>) => {
        if (action.payload?.uuid) {
          state.directions.forEach(direction => {
            if (direction.uuid === action.payload?.uuid) {
              direction.name = action.payload?.name
            }
          })
        }
      },
    )

    builder.addCase(deleteDirectionTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.directions = state.directions.filter(
          direction => direction.uuid !== action.payload,
        )
      }
    })
  },
})

export const directionsReducer = mainSlice.reducer
export const { setDirectionAC } = mainSlice.actions
