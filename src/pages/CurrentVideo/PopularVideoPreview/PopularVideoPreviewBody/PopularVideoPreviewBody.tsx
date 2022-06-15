import { FC } from 'react'

import style from './PopularVideoPreviewBody.module.scss'

import videoPreview from 'assets/images/header.png'
import { PopularVideoPreviewBodyPropsType } from 'store/types/PopularVideoPreviewBodyPropsType'

export const PopularVideoPreviewBody: FC<PopularVideoPreviewBodyPropsType> = ({
  videoTitle,
}) => (
  <div className={style.container}>
    <img alt="" src={videoPreview} />

    <h5>{videoTitle}</h5>
  </div>
)
