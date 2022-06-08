import { tagsReducer } from 'store/reducers/tags_reducer'
import { getTagsTC } from 'store/thunks/tags_thunks'
import { TagsInitialStateType } from 'store/types/TagsInitialStateType'
import { TagType } from 'store/types/TagType'

let initialState: TagsInitialStateType
let newTags: TagType[]

beforeEach(() => {
  initialState = {
    tags: [],
  }

  newTags = [
    { uuid: '1', name: 'JS' },
    { uuid: '2', name: 'TS' },
  ]
})

describe('tags reducer', () => {
  test('should set new tags', () => {
    const action = getTagsTC.fulfilled(newTags, '')

    const endState = tagsReducer(initialState, action)

    expect(endState.tags).toStrictEqual(newTags)
  })
})
