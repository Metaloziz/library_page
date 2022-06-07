import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ActionPayloadType, ContentType } from 'store/types/ContentType'

export const initialState: ContentType = {
  isArticle: false,
  isBooks: false,
  isVideo: false,
}

const mainSlice = createSlice({
  name: 'content_type',
  initialState,
  reducers: {
    setContentTypeAC: (state, action: PayloadAction<ActionPayloadType>) => {
      state[action.payload.name] = action.payload.value
    },
    setAllContentTypeAC: state => {
      const { isBooks, isVideo, isArticle } = state

      Object.keys(state).forEach(key => {
        // @ts-ignore
        state[key] = !(isBooks && isVideo && isArticle)
      })
    },
  },
})

export const contentTypeReducer = mainSlice.reducer
export const { setContentTypeAC, setAllContentTypeAC } = mainSlice.actions
