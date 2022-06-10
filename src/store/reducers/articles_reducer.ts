import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getArticlesTC } from 'store/thunks/articles_thunks'
import { ArticlesInitialStateType } from 'store/types/ArticlesInitialStateType'
import { findElement } from 'utils'

export const initialState: ArticlesInitialStateType = {
  articles: [
    {
      uuid: '',
      title: '',
      direction: {
        uuid: '',
        name: '',
      },
      difficulty: '',
      author: {
        uuid: '',
        full_name: '',
      },
      edition_date: '',
      description: '',
      local_url: '',
      image_url: '',
      language: '',
      tags: [{ uuid: '', name: '' }],
    },
  ],
  currentArticle: {
    uuid: '',
    title: '',
    direction: {
      uuid: '',
      name: '',
    },
    difficulty: '',
    author: {
      uuid: '',
      full_name: '',
    },
    edition_date: '',
    description: '',
    local_url: '',
    image_url: '',
    language: '',
    tags: [{ uuid: '', name: '' }],
  },
}

const mainSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCurrentArticleAC: (state, action: PayloadAction<string>) => {
      state.currentArticle = findElement(state.articles, action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(getArticlesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.articles = action.payload
      }
    })
  },
})

export const articlesReducer = mainSlice.reducer
export const { setCurrentArticleAC } = mainSlice.actions
