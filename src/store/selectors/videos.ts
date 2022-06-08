import { RootState } from 'store/store'
import { VideoType } from 'store/types/VideoType'

export const selectVideos = (state: RootState): VideoType[] => state.videos.videos
