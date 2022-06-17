import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { authorsReducer } from 'store/reducers/author_reducer'
import {
  deleteAuthorTC,
  getAuthorsTC,
  getAuthorTC,
  updateAuthorTC,
} from 'store/thunks/authors_thunks'
import { AuthorInitialStateType } from 'store/types/AuthorInitialStateType'
import { AuthorType } from 'store/types/AuthorType'
import { findElement } from 'utils'

let initialState: AuthorInitialStateType
let newAuthors: AuthorType[]
let newAuthor: AuthorType
let updatedAuthor: AuthorType
const newAuthorId: string = '10'
const updateAuthorId: string = '3'
const deleteAuthorId: string = '4'

beforeEach(() => {
  initialState = {
    authors: [
      { uuid: updateAuthorId, full_name: 'EVA' },
      { uuid: deleteAuthorId, full_name: 'ADAM' },
    ],
  }

  newAuthors = [
    { uuid: '1', full_name: 'ADAM' },
    { uuid: '2', full_name: 'EVA' },
  ]

  newAuthor = {
    uuid: newAuthorId,
    full_name: 'Martin',
  }

  updatedAuthor = {
    uuid: updateAuthorId,
    full_name: 'Martin22222222',
  }
})

describe('author reducer', () => {
  test('should set authors', () => {
    const action = getAuthorsTC.fulfilled(newAuthors, '')

    const endState = authorsReducer(initialState, action)

    expect(endState.authors).toStrictEqual(newAuthors)
  })
  test('should add the author', () => {
    const action = getAuthorTC.fulfilled(newAuthor, '', newAuthorId)

    const endState = authorsReducer(initialState, action)

    const currentAuthor = findElement(endState.authors, newAuthorId)

    expect(currentAuthor).toStrictEqual(newAuthor)
  })

  test('should update the author name', () => {
    const action = updateAuthorTC.fulfilled(updatedAuthor, '', updatedAuthor)

    const endState = authorsReducer(initialState, action)

    expect(endState.authors[FIRST_ARRAY_ITEM].full_name).toBe(updatedAuthor.full_name)
  })

  test('should delete the author', () => {
    const action = deleteAuthorTC.fulfilled(deleteAuthorId, '', deleteAuthorId)

    const endState = authorsReducer(initialState, action)

    const result = endState.authors.find(author => author.uuid === deleteAuthorId)

    expect(result).toBeUndefined()
  })
})
