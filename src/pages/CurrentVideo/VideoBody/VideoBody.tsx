import { FC } from 'react'

import style from './VideoBody.module.scss'

import videoPreview from 'assets/images/header.png'
import { BASE_IMAGE_URL } from 'constants/constants'
import { VideoType } from 'store/types/VideoType'

type VideoBodyPropsType = {
  video: VideoType
}
export const VideoBody: FC<VideoBodyPropsType> = ({ video: { title, local_url } }) => (
  <div className={style.container}>
    <h1>{title}</h1>
    <video controls poster={videoPreview}>
      <source src={`${BASE_IMAGE_URL + local_url}`} type="video/mp4" />
      <track kind="captions" src={`${BASE_IMAGE_URL + local_url}`} />
    </video>
  </div>
)
