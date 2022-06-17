import { createSlice } from '@reduxjs/toolkit'

import { getDirectionsTC, getDirectionTC } from 'store/thunks/directions_thunks'
import { DirectionsInitialStateType } from 'store/types/DirectionsInitialStateType'

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
  },
})

export const directionsReducer = mainSlice.reducer
export const { setDirectionAC } = mainSlice.actions
