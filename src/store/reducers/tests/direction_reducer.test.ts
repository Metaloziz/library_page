import {
  DirectionInitialStateType,
  directionsReducer,
  setDirectionAC,
} from 'store/reducers/direction_reducer'
import { getDirectionsTC } from 'store/thunks/directions_thunks'
import { DirectionType } from 'store/types/DirectionType'

let directionInitialState: DirectionInitialStateType
let newDirections: DirectionType[]
const newActiveDirection: string = '10'

beforeEach(() => {
  directionInitialState = {
    directions: [],
    activeDirection: '0',
  }

  newDirections = [
    { uuid: '1', name: 'JS' },
    { uuid: '2', name: 'TS' },
  ]
})

describe('direction reducer', () => {
  test('should set directions', () => {
    const action = getDirectionsTC.fulfilled(newDirections, '')

    const endState = directionsReducer(directionInitialState, action)

    expect(endState.directions).toStrictEqual(newDirections)
  })

  test('should set active direction', () => {
    const action = setDirectionAC(newActiveDirection)

    const endState = directionsReducer(directionInitialState, action)

    expect(endState.activeDirection).toBe(newActiveDirection)
  })
})
