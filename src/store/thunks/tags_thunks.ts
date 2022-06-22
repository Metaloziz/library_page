import { createAsyncThunk } from '@reduxjs/toolkit'

import { tagsAPI } from 'api/tags'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { TagNamePostType } from 'store/types/TagNamePostType'
import { TagType } from 'store/types/TagType'
import { setThunkError } from 'utils'
import { separateId } from 'utils/separate_id'

export const getTagsTC = createAsyncThunk('tags/getTagsTC', async (_, { dispatch }) => {
  try {
    dispatch(setIsLoadingStatusAC(true))

    const { data, status } = await tagsAPI.getTags()
    if (status === StatusCode.GET_TAGS_SUCCESS) {
      return data
    }
  } catch (error) {
    setThunkError(dispatch, error as ResponseErrorType)
  } finally {
    dispatch(setIsLoadingStatusAC(false))
  }
})

export const postTagsTC = createAsyncThunk(
  'tags/postTagsTC',
  async (newTag: TagNamePostType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await tagsAPI.postTag(newTag)
      if (status === StatusCode.POST_TAG_SUCCESS) {
        const tag: TagType = { name: newTag.name, uuid: separateId(data.infoMsg) }
        return tag
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const updateTagTC = createAsyncThunk(
  'tags/updateTagTC',
  async (newTag: TagType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await tagsAPI.updateAuthor(newTag)
      if (status === StatusCode.UPDATE_TAG_SUCCESS) {
        return newTag
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const deleteTagTC = createAsyncThunk(
  'tags/deleteTagTC',
  async (tagId: string, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await tagsAPI.deleteTag(tagId)
      if (status === StatusCode.DELETE_TAG_SUCCESS) {
        return tagId
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
