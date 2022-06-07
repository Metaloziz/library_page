import { RootState } from 'store/store'
import { DirectionType } from 'store/types/DirectionType'

export const selectDirections = (state: RootState): DirectionType[] =>
  state.directions.directions

export const selectActiveDirection = (state: RootState): number =>
  state.directions.activeDirection
