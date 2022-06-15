import { FC } from 'react'

import style from './PreviewBooksContainer.module.scss'

import { BASE_URL } from 'constants/constants'
import { PreviewBooksContainerPropsType } from 'store/types/PreviewBooksContainerPropsType'
import { convertTitle } from 'utils/convert_title'

export const PreviewBooksContainer: FC<PreviewBooksContainerPropsType> = ({
  books,
  setCurrentBookHandle,
}) => (
  <div className={style.container}>
    {books.map(({ uuid, title, author, image_url }) => (
      <div
        role="button"
        tabIndex={0}
        key={uuid}
        className={style.item}
        onClick={() => setCurrentBookHandle(uuid)}
      >
        <img alt="" src={BASE_URL + image_url} />
        <h5>{convertTitle(title)}</h5>
        <h4>{author.full_name}</h4>
      </div>
    ))}
  </div>
)
