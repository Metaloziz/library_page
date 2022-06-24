import { FC } from 'react'

import style from './EditBook.module.scss'

import { BookForm } from 'pages/CreationPage/EditBook/BookForm/BookForm'
import { useAppDispatch } from 'store/store'
import { postBooksTC } from 'store/thunks/books_thunks'
import { BookPostType } from 'store/types/BookPostType'

export const EditBook: FC = () => {
  const dispatch = useAppDispatch()

  const createBook = (book: BookPostType): void => {
    dispatch(postBooksTC(book))
  }

  return (
    <div className={style.container}>
      <div>
        <h4>Добавить новую книгу:</h4>
        <BookForm setBook={createBook} />
      </div>
    </div>
  )
}
