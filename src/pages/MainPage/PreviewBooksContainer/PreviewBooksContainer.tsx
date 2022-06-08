import { FC } from 'react'

import style from './PreviewBooksContainer.module.scss'

import { BASE_URL } from 'constants/constants'
import { BookType } from 'store/types/BookType'

type PreviewBooksContainerPropsType = {
  books: BookType[]
}

export const PreviewBooksContainer: FC<PreviewBooksContainerPropsType> = ({ books }) => (
  <div className={style.container}>
    {books.map(({ uuid, title, author, image_url }) => (
      <div key={uuid} className={style.item}>
        <img alt="" src={BASE_URL + image_url} />
        <h5>{title}</h5>
        <h4>{author.full_name}</h4>
      </div>
    ))}
  </div>
)
