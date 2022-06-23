import { FC } from 'react'

import style from './EditBook.module.scss'

import { BookForm } from 'pages/CreationPage/EditBook/BookForm/BookForm'
import { BookPostType } from 'store/types/BookPostType'

export const EditBook: FC = () => {
  const createBook = (book: BookPostType): void => {
    console.log(book)
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
