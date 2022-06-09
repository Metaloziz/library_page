import { FC } from 'react'

import style from 'pages/CurrentBook/PopularBooksPreviewContainer/PopularBooksPreview.module.scss'
import { PopularBooksPreviewBody } from 'pages/CurrentBook/PopularBooksPreviewContainer/PopularBooksPreview/PopularBooksPreviewBody'
import { PopularNewsPreviewPropsType } from 'store/types/PopularNewsPreviewPropsType'

export const PopularBooksPreview: FC<PopularNewsPreviewPropsType> = ({
  books,
  setCurrentBook,
}) => (
  <div className={style.container}>
    <h5>Популярные книги</h5>
    {books.map(book => (
      <PopularBooksPreviewBody
        key={book.uuid}
        setCurrentBook={setCurrentBook}
        book={book}
      />
    ))}
  </div>
)
