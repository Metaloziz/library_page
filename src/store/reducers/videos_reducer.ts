import { createSlice } from '@reduxjs/toolkit'

import { getVideosTC } from 'store/thunks/videos_thunks'
import { VideoType } from 'store/types/VideoType'
import { convertTitle } from 'utils/convertTitle'

export type VideosInitialStateType = {
  videos: VideoType[]
}

export const initialState: VideosInitialStateType = {
  videos: [],
}

const mainSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVideosTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.videos = action.payload.map(video => ({
          ...video,
          title: convertTitle(video.title),
        }))
      }
    })
  },
})

export const videosReducer = mainSlice.reducer
