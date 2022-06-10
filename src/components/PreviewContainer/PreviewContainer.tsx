import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { DirectionNavigation } from './DirectionNavigation/DirectionNavigation'
import style from './PreviewContainer.module.scss'

import { SearchField } from 'components/commonComponents'
import { AuthorNavigation } from 'components/PreviewContainer/AuthorNavigation/AuthorNavigation'
import { ContentTypeNavigation } from 'components/PreviewContainer/ContentTypeNavigation/ContentTypeNavigation'
import { TagsNavigation } from 'components/PreviewContainer/TagsNavigation/TagsNavigation'
import { Path } from 'enums'
import { PreviewArticlesContainer } from 'pages/MainPage/PreviewArticlesContainer/PreviewArticlesContainer'
import { PreviewBooksContainer } from 'pages/MainPage/PreviewBooksContainer/PreviewBooksContainer'
import { PreviewVideoContainer } from 'pages/MainPage/PreviewVideosContainer/PreviewVideoContainer'
import { setCurrentBookAC } from 'store/reducers/books_reducer'
import { selectBooks } from 'store/selectors/books'
import { useAppDispatch } from 'store/store'
import { getArticlesTC } from 'store/thunks/articles_thunks'
import { getAuthorsTC } from 'store/thunks/authors_thunks'
import { getBooksTC } from 'store/thunks/books_thunks'
import { getDirectionsTC } from 'store/thunks/directions_thunks'
import { getTagsTC } from 'store/thunks/tags_thunks'
import { getVideosTC } from 'store/thunks/videos_thunks'

export const PreviewContainer: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const books = useSelector(selectBooks)

  useEffect(() => {
    dispatch(getDirectionsTC())
    dispatch(getAuthorsTC())
    dispatch(getTagsTC())

    dispatch(getBooksTC())
    dispatch(getVideosTC())
    dispatch(getArticlesTC())
  }, [])

  const currentBookRouteHandle = useCallback((bookId: string): void => {
    navigate(Path.CURRENT_BOOK)
    dispatch(setCurrentBookAC(bookId))
  }, [])

  return (
    <div className={style.container}>
      <div className={style.preview}>
        <SearchField />
        <div className={style.body}>
          <div>
            <h1>Помощь Frontend-разработчику</h1>
            <PreviewBooksContainer
              books={books}
              setCurrentBookHandle={currentBookRouteHandle}
            />
          </div>
          <div>
            <h1>Помощь Backend-разработчику</h1>
            <PreviewBooksContainer
              books={books}
              setCurrentBookHandle={currentBookRouteHandle}
            />
          </div>
          <div>
            <h1>Видео</h1>
            <PreviewVideoContainer />
          </div>
          <div>
            <h1>Статьи</h1>
            <PreviewArticlesContainer />
          </div>
        </div>
      </div>
      <div className={style.navigation}>
        <DirectionNavigation />
        <ContentTypeNavigation />
        <AuthorNavigation />
        <TagsNavigation />
      </div>
    </div>
  )
}
