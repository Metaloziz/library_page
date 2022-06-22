import { tagsReducer } from 'store/reducers/tags_reducer'
import { getTagsTC, postTagsTC, updateTagTC } from 'store/thunks/tags_thunks'
import { TagNamePostType } from 'store/types/TagNamePostType'
import { TagsInitialStateType } from 'store/types/TagsInitialStateType'
import { TagType } from 'store/types/TagType'
import { findElement } from 'utils'

let initialState: TagsInitialStateType
let newTags: TagType[]
let newTagName: TagNamePostType
let tag: TagType
const updateTagId: string = '11'
let updateTag: TagType

beforeEach(() => {
  initialState = {
    tags: [{ uuid: updateTagId, name: 'Martin' }],
  }

  updateTag = {
    uuid: updateTagId,
    name: 'Bob',
  }

  newTags = [
    { uuid: '1', name: 'JS' },
    { uuid: '2', name: 'TS' },
  ]

  newTagName = { name: 'newName' }

  tag = { uuid: '10', ...newTagName }
})

describe('tags reducer', () => {
  test('should set new tags', () => {
    const action = getTagsTC.fulfilled(newTags, '')

    const endState = tagsReducer(initialState, action)

    expect(endState.tags).toStrictEqual(newTags)
  })

  test('should add new tag', () => {
    const action = postTagsTC.fulfilled(tag, '', newTagName)

    const endState = tagsReducer(initialState, action)

    const currentTag = findElement(endState.tags, tag.uuid)

    expect(currentTag).toStrictEqual(tag)
  })

  test('should update current tag', () => {
    const action = updateTagTC.fulfilled(updateTag, '', updateTag)

    const endState = tagsReducer(initialState, action)

    const currentTag = findElement(endState.tags, updateTag.uuid)

    expect(currentTag.uuid).toBe(updateTag.uuid)
  })
})
