import { directionsReducer, setDirectionAC } from 'store/reducers/directions_reducer'
import { getDirectionsTC, getDirectionTC } from 'store/thunks/directions_thunks'
import { DirectionsInitialStateType } from 'store/types/DirectionsInitialStateType'
import { DirectionType } from 'store/types/DirectionType'
import { findElement } from 'utils'

let directionInitialState: DirectionsInitialStateType
let newDirections: DirectionType[]
const newActiveDirection: string = '10'
let newDirection: DirectionType
const newDirectionId: string = '20'

beforeEach(() => {
  directionInitialState = {
    directions: [],
    activeDirection: '0',
  }

  newDirections = [
    { uuid: '1', name: 'JS' },
    { uuid: '2', name: 'TS' },
  ]

  newDirection = { uuid: newDirectionId, name: 'SAGA' }
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

  test('should add new direction', () => {
    const action = getDirectionTC.fulfilled(newDirection, '', newDirectionId)

    const endState = directionsReducer(directionInitialState, action)

    const currentDirection = findElement(endState.directions, newDirectionId)

    expect(currentDirection).toBe(newDirection)
  })
})
