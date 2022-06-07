import { FC } from 'react'

import style from './PreviewBooksContainer.module.scss'

export const PreviewBooksContainer: FC = () => (
  <div className={style.container}>
    <div className={style.item} />
    <div className={style.item} />
    <div className={style.item} />
    <div className={style.item} />
    <div className={style.item} />
  </div>
)
