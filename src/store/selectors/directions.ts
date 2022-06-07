import { DirectionType } from 'components/NavigationContainer/DirectionNavigation/NavigationSelect'
import { RootState } from 'store/store'

export const selectDirections = (state: RootState): DirectionType[] =>
  state.directions.directions

export const selectActiveDirection = (state: RootState): number =>
  state.directions.activeDirection
