import { authorsReducer, AuthorType } from 'store/reducers/author_reducer'
import { getAuthorsTC } from 'store/thunks/authors_thunks'
import { AuthorInitialStateType } from 'store/types/AuthorInitialStateType'

let initialState: AuthorInitialStateType
let newAuthors: AuthorType[]

beforeEach(() => {
  initialState = {
    authors: [],
  }

  newAuthors = [
    { uuid: '1', full_name: 'ADAM' },
    { uuid: '2', full_name: 'EVA' },
  ]
})

describe('author reducer', () => {
  test('should set authors', () => {
    const action = getAuthorsTC.fulfilled(newAuthors, '')

    const endState = authorsReducer(initialState, action)

    expect(endState.authors).toStrictEqual(newAuthors)
  })
})
