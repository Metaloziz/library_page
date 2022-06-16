import { FC } from 'react'

import style from './PopularBooksPreviewBody.module.scss'

import { BASE_IMAGE_URL } from 'constants/constants'
import { PopularBookPreviewBodyPT } from 'store/types/PopularBookPreviewBodyPT'

export const PopularBooksPreviewBody: FC<PopularBookPreviewBodyPT> = ({
  setCurrentBook,
  book: { title, image_url, author, uuid, edition_date },
}) => (
  <div
    tabIndex={0}
    role="button"
    className={style.books}
    onClick={() => setCurrentBook(uuid)}
  >
    <img src={BASE_IMAGE_URL + image_url} alt="" />

    <div>
      <span>{title}</span>
      <p>{edition_date}</p>
      <h4> {author.full_name}</h4>
      <button type="button">скачать</button>
    </div>
  </div>
)
