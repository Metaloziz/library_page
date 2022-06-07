import { createSlice } from '@reduxjs/toolkit'

import { DirectionType } from 'components/NavigationContainer/DirectionNavigation/NavigationSelect'
import { getDirectionsTC } from 'store/thunks/directions_thunks'

export type DirectionInitialStateType = {
  directions: DirectionType[]
  activeDirection: number
}

export const initialState: DirectionInitialStateType = {
  directions: [{ uuid: 0, name: '' }],
  activeDirection: 0,
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
        state.directions = action.payload.map(directionItem => ({
          ...directionItem,
          uuid: Number(directionItem.uuid),
        }))
      }
    })
  },
})

export const directionsReducer = mainSlice.reducer
export const { setDirectionAC } = mainSlice.actions
