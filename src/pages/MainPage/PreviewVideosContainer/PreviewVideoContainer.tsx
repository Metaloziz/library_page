import { FC } from 'react'

import style from './PreviewVideoContainer.module.scss'

import playIcon from 'assets/images/common/playIcon.svg'
import videoPreview from 'assets/images/header.png'
import { VideoType } from 'store/types/VideoType'

type PreviewVideoContainerPropsType = {
  videos: VideoType[]
  setCurrentVideoHandle: (videoId: string) => void
}

export const PreviewVideoContainer: FC<PreviewVideoContainerPropsType> = ({
  videos,
  setCurrentVideoHandle,
}) => (
  <div className={style.container}>
    {videos.map(({ uuid, title }) => (
      <div
        role="button"
        tabIndex={0}
        key={uuid}
        className={style.item}
        onClick={() => {
          setCurrentVideoHandle(uuid)
        }}
      >
        <div className={style.body}>
          <img className={style.preview} src={videoPreview} alt="" />

          <img className={style.icon} src={playIcon} alt="" />
        </div>
        <h5>{title}</h5>
      </div>
    ))}
  </div>
)
