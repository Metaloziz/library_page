import { tagsReducer } from 'store/reducers/tags_reducer'
import { getTagsTC, postTagsTC } from 'store/thunks/tags_thunks'
import { TagNamePostType } from 'store/types/TagNamePostType'
import { TagsInitialStateType } from 'store/types/TagsInitialStateType'
import { TagType } from 'store/types/TagType'
import { findElement } from 'utils'

let initialState: TagsInitialStateType
let newTags: TagType[]
let newTag: TagNamePostType
let tag: TagType

beforeEach(() => {
  initialState = {
    tags: [],
  }

  newTags = [
    { uuid: '1', name: 'JS' },
    { uuid: '2', name: 'TS' },
  ]

  newTag = { name: 'newName' }

  tag = { uuid: '10', ...newTag }
})

describe('tags reducer', () => {
  test('should set new tags', () => {
    const action = getTagsTC.fulfilled(newTags, '')

    const endState = tagsReducer(initialState, action)

    expect(endState.tags).toStrictEqual(newTags)
  })

  test('should add new tag', () => {
    const action = postTagsTC.fulfilled(tag, '', newTag)

    const endState = tagsReducer(initialState, action)

    const currentTag = findElement(endState.tags, tag.uuid)

    expect(currentTag).toStrictEqual(tag)
  })
})
