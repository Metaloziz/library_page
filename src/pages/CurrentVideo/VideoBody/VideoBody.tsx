import { FC } from 'react'

import style from './VideoBody.module.scss'

import videoPreview from 'assets/images/header.png'
import { BASE_IMAGE_URL } from 'constants/constants'
import { VideoBodyPropsType } from 'store/types/VideoBodyPropsType'

export const VideoBody: FC<VideoBodyPropsType> = ({
  video: { title, local_url, description },
}) => (
  <div className={style.container}>
    <h1>{title}</h1>
    <video controls poster={videoPreview}>
      <source src={`${BASE_IMAGE_URL + local_url}`} type="video/mp4" />
      <track kind="captions" src={`${BASE_IMAGE_URL + local_url}`} />
    </video>
    <div>{description}</div>
  </div>
)
