import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './PreviewBooksContainer.module.scss'

import { BASE_IMAGE_URL } from 'constants/constants'
import { Path } from 'enums'
import { setCurrentBookAC } from 'store/reducers/books_reducer'
import { selectBooks } from 'store/selectors/books'
import { useAppDispatch } from 'store/store'
import { getBooksTC } from 'store/thunks/books_thunks'
import { convertTitle } from 'utils/convert_title'

export const PreviewBooksContainer: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const books = useSelector(selectBooks)

  useEffect(() => {
    dispatch(getBooksTC())
  }, [])

  const setCurrentBookRouteHandle = useCallback((bookId: string): void => {
    navigate(Path.CURRENT_BOOK)
    dispatch(setCurrentBookAC(bookId))
  }, [])

  return (
    <div className={style.container}>
      {books.map(({ uuid, title, author, image_url }) => (
        <div
          role="button"
          tabIndex={0}
          key={uuid}
          className={style.item}
          onClick={() => setCurrentBookRouteHandle(uuid)}
        >
          <img alt="" src={BASE_IMAGE_URL + image_url} />
          <h5>{convertTitle(title)}</h5>
          <h4>{author.full_name}</h4>
        </div>
      ))}
    </div>
  )
}
