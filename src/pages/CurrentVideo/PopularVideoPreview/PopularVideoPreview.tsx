import { FC } from 'react'

import style from 'pages/CurrentArticle/PopularArticlePreview/PopularArticlePreview.module.scss'
import { PopularVideoPreviewBody } from 'pages/CurrentVideo/PopularVideoPreview/PopularVideoPreviewBody/PopularVideoPreviewBody'
import { PopularVideoPreviewPropsType } from 'store/types/PopularVideoPreviewPropsType'

export const PopularVideoPreview: FC<PopularVideoPreviewPropsType> = ({
  videos,
  setCurrentVideo,
}) => (
  <div className={style.container}>
    <h3>Похожие видео:</h3>
    {videos.map(({ uuid, title }) => (
      <PopularVideoPreviewBody
        key={uuid}
        videoTitle={title}
        onClick={() => setCurrentVideo(uuid)}
      />
    ))}
  </div>
)
