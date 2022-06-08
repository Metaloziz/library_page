import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './PreviewVideoContainer.module.scss'

import videoPreview from 'assets/images/header.png'
import { BASE_URL } from 'constants/constants'
import { selectVideos } from 'store/selectors/videos'

export const PreviewVideoContainer: FC = () => {
  const videos = useSelector(selectVideos)

  return (
    <div className={style.container}>
      {videos.map(({ uuid, title, local_url }) => (
        <div key={uuid} className={style.item}>
          <video controls poster={videoPreview}>
            <source src={`${BASE_URL + local_url}`} type="video/mp4" />
            <track kind="captions" src={`${BASE_URL + local_url}`} />
          </video>

          <h5>{title}</h5>
        </div>
      ))}
    </div>
  )
}
