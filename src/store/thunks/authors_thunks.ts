import { createAsyncThunk } from '@reduxjs/toolkit'

import { authorsAPI } from 'api/authors'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { AuthorNameType } from 'store/types/AuthorNameType'
import { AuthorType } from 'store/types/AuthorType'
import { setThunkError } from 'utils'
import { separateId } from 'utils/separate_id'

export const getAuthorsTC = createAsyncThunk(
  'authors/getAuthorsTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await authorsAPI.getAuthors()
      if (status === StatusCode.GET_AUTHORS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const getAuthorTC = createAsyncThunk(
  'authors/getAuthorTC',
  async (authorId: string, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await authorsAPI.getAuthor(authorId)
      if (status === StatusCode.GET_AUTHOR_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const postAuthorTC = createAsyncThunk(
  'authors/postAuthorTC',
  async (authorName: AuthorNameType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await authorsAPI.postAuthor(authorName)
      if (status === StatusCode.POST_AUTHOR_SUCCESS) {
        const newAuthorId = separateId(data.infoMsg)
        dispatch(getAuthorTC(newAuthorId))
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const updateAuthorTC = createAsyncThunk(
  'authors/updateAuthorTC',
  async (author: AuthorType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await authorsAPI.updateAuthor(author)
      if (status === StatusCode.UPDATE_AUTHOR_SUCCESS) {
        return author
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const deleteAuthorTC = createAsyncThunk(
  'authors/deleteAuthorTC',
  async (authorId: string, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await authorsAPI.deleteAuthor(authorId)
      if (status === StatusCode.DELETE_AUTHOR_SUCCESS) {
        return authorId
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
