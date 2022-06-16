import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './PreviewVideoContainer.module.scss'

import playIcon from 'assets/images/common/playIcon.svg'
import videoPreview from 'assets/images/header.png'
import { Path } from 'enums'
import { setCurrentVideoAC } from 'store/reducers/videos_reducer'
import { selectVideos } from 'store/selectors/videos'
import { useAppDispatch } from 'store/store'
import { getVideosTC } from 'store/thunks/videos_thunks'

export const PreviewVideoContainer: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const videos = useSelector(selectVideos)

  useEffect(() => {
    dispatch(getVideosTC())
  }, [])

  const setCurrentVideoHandle = useCallback((videoId: string): void => {
    navigate(Path.CURRENT_VIDEO)
    dispatch(setCurrentVideoAC(videoId))
  }, [])

  return (
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
}
