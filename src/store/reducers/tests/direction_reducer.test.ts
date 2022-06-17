import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { directionsReducer, setDirectionAC } from 'store/reducers/directions_reducer'
import {
  getDirectionsTC,
  getDirectionTC,
  updateDirectionTC,
} from 'store/thunks/directions_thunks'
import { DirectionsInitialStateType } from 'store/types/DirectionsInitialStateType'
import { DirectionType } from 'store/types/DirectionType'
import { findElement } from 'utils'

let directionInitialState: DirectionsInitialStateType
let newDirections: DirectionType[]
const newActiveDirection: string = '10'
let newDirection: DirectionType
let updatedDirection: DirectionType
const updatedDirectionId: string = '21'
const newDirectionId: string = '20'

beforeEach(() => {
  directionInitialState = {
    directions: [{ uuid: updatedDirectionId, name: 'PYTHON' }],
    activeDirection: '0',
  }

  newDirections = [
    { uuid: '1', name: 'JS' },
    { uuid: '2', name: 'TS' },
  ]

  newDirection = { uuid: newDirectionId, name: 'SAGA' }

  updatedDirection = { uuid: updatedDirectionId, name: 'THUNK' }
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

  test('should update  direction', () => {
    const action = updateDirectionTC.fulfilled(updatedDirection, '', updatedDirection)

    const endState = directionsReducer(directionInitialState, action)

    expect(endState.directions[FIRST_ARRAY_ITEM].name).toBe(updatedDirection.name)
  })
})
