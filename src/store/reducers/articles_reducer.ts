import { createSlice } from '@reduxjs/toolkit'

import { getArticlesTC } from 'store/thunks/articles_thunks'
import { ArticleType } from 'store/types/ArticleType'

export type ArticlesInitialStateType = {
  articles: ArticleType[]
}

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
}

const mainSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticlesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.articles = action.payload
      }
    })
  },
})

export const articlesReducer = mainSlice.reducer
