import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './PreviewVideoContainer.module.scss'

import playIcon from 'assets/images/common/playIcon.svg'
import videoPreview from 'assets/images/header.png'
import { selectVideos } from 'store/selectors/videos'

export const PreviewVideoContainer: FC = () => {
  const videos = useSelector(selectVideos)

  return (
    <div className={style.container}>
      {videos.map(({ uuid, title }) => (
        <div key={uuid} className={style.item}>
          <div className={style.body}>
            <img src={videoPreview} alt="" />
            <div>
              <img className={style.icon} src={playIcon} alt="" />
            </div>
          </div>
          <h5>{title}</h5>
        </div>
      ))}
    </div>
  )
}
