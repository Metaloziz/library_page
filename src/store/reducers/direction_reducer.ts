import { createSlice } from '@reduxjs/toolkit'

import { DirectionType } from 'components/NavigationContainer/DirectionNavigation/NavigationSelect'

type InitialDirectionStateType = {
  directions: DirectionType[]
}

const initialState: InitialDirectionStateType = {
  directions: [{ uuid: 0, name: '' }],
}

const mainSlice = createSlice({
  name: 'directions',
  initialState,
  reducers: {},
})
