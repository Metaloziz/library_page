import { createAsyncThunk } from '@reduxjs/toolkit'

import { articlesAPI } from 'api/articles'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getArticlesTC = createAsyncThunk(
  'articles/getArticlesTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await articlesAPI.getArticles()
      if (status === StatusCode.GET_ARTICLES_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const loadArticleFileTC = createAsyncThunk(
  'articles/loadArticleFileTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const response = await articlesAPI.loadArticleFile()
      if (response.status === StatusCode.GET_DIRECTIONS_SUCCESS) {
        return response.data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
