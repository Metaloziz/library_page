import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Footer, MobileNavigation, NavLinkComponent, SearchField } from 'components'
import { PREVIEW_ITEMS_COUNT } from 'constants/constants'
import { Path } from 'enums'
import { BookBody } from 'pages/CurrentBook/BookBody/BookBody'
import style from 'pages/CurrentBook/CurrentBook.module.scss'
import { PopularBooksPreview } from 'pages/CurrentBook/PopularBooksPreviewContainer/PopularBooksPreview'
import { setCurrentBookAC } from 'store/reducers/books_reducer'
import { selectBooks } from 'store/selectors/books'
import { useAppDispatch } from 'store/store'
import { getRandomItems } from 'utils/getRandomItems'

const CurrentBook: FC = () => {
  const dispatch = useAppDispatch()

  const books = useSelector(selectBooks)
  const previewBooks = getRandomItems(books, PREVIEW_ITEMS_COUNT)

  const setCurrentBook = (bookId: string): void => {
    dispatch(setCurrentBookAC(bookId))
  }

  return (
    <div className={style.container}>
      <MobileNavigation />
      <div className={style.bodyContainer}>
        <h1>Библиотека / книги</h1>
        <SearchField />
        <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
        <div className={style.body}>
          <BookBody />
          <PopularBooksPreview books={previewBooks} setCurrentBook={setCurrentBook} />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default CurrentBook
