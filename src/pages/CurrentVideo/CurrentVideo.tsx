import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Footer, MobileNavigation, SearchField } from 'components'
import { PREVIEW_ITEMS_COUNT } from 'constants/constants'
import style from 'pages/CurrentArticle/CurrentArticle.module.scss'
import { PopularVideoPreview } from 'pages/CurrentVideo/PopularVideoPreview/PopularVideoPreview'
import { VideoBody } from 'pages/CurrentVideo/VideoBody/VideoBody'
import { setCurrentVideoAC } from 'store/reducers/videos_reducer'
import { selectVideo, selectVideos } from 'store/selectors/videos'
import { useAppDispatch } from 'store/store'
import { getRandomItems } from 'utils/getRandomItems'

const CurrentVideo: FC = () => {
  const dispatch = useAppDispatch()

  const videos = useSelector(selectVideos)

  const video = useSelector(selectVideo)
  const previewVideos = getRandomItems(videos, PREVIEW_ITEMS_COUNT)

  const setCurrentVideo = (videoId: string): void => {
    dispatch(setCurrentVideoAC(videoId))
  }

  return (
    <div className={style.container}>
      <MobileNavigation />
      <div className={style.bodyContainer}>
        <h1>Библиотека / видео</h1>
        <SearchField />
        <div className={style.body}>
          <VideoBody video={video} />
          <PopularVideoPreview videos={previewVideos} setCurrentVideo={setCurrentVideo} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default CurrentVideo
