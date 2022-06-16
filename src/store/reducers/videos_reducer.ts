import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getVideosTC } from 'store/thunks/videos_thunks'
import { VideosInitialStateType } from 'store/types/VideosInitialStateType'
import { findElement } from 'utils'

export const initialState: VideosInitialStateType = {
  videos: [],
  currentVideo: {
    uuid: '',
    title: '',
    direction: {
      uuid: '',
      name: '',
    },
    difficulty: '',
    description: '',
    local_url: '',
    web_url: '',
    language: '',
    tags: [],
  },
}

const mainSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setCurrentVideoAC: (state, action: PayloadAction<string>) => {
      state.currentVideo = findElement(state.videos, action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(getVideosTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.videos = action.payload
      }
    })
  },
})

export const { setCurrentVideoAC } = mainSlice.actions
export const videosReducer = mainSlice.reducer
