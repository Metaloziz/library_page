import { VideoType } from 'store/types/VideoType'

export type PopularVideoPreviewPropsType = {
  videos: VideoType[]
  setCurrentVideo: (videoId: string) => void
}
