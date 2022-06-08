import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { VideoType } from 'store/types/VideoType'

export const videoAPI = {
  getVideo: () => instance.get<VideoType[]>(`${RequestSource.VIDEO}`),
}
