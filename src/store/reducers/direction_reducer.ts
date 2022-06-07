import { createSlice } from '@reduxjs/toolkit'

import { getDirectionsTC } from 'store/thunks/directions_thunks'
import { DirectionType } from 'store/types/DirectionType'

export type DirectionInitialStateType = {
  directions: DirectionType[]
  activeDirection: string
}

export const initialState: DirectionInitialStateType = {
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
  },
})

export const directionsReducer = mainSlice.reducer
export const { setDirectionAC } = mainSlice.actions
