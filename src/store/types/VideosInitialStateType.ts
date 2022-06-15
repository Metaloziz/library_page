import { VideoType } from 'store/types/VideoType'

export type VideosInitialStateType = {
  videos: VideoType[]
  currentVideo: VideoType
}
