import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { DirectionNavigation } from './DirectionNavigation/DirectionNavigation'

import { SearchField } from 'components/commonComponents'
import { AuthorNavigation } from 'components/NavigationContainer/AuthorNavigation/AuthorNavigation'
import { ContentTypeNavigation } from 'components/NavigationContainer/ContentTypeNavigation/ContentTypeNavigation'
import style from 'components/NavigationContainer/NavigationContainer.module.scss'
import { TagsNavigation } from 'components/NavigationContainer/TagsNavigation/TagsNavigation'
import { PreviewBooksContainer } from 'pages/MainPage/PreviewBooksContainer/PreviewBooksContainer'
import { selectBooks } from 'store/selectors/books'
import { useAppDispatch } from 'store/store'
import { getAuthorsTC } from 'store/thunks/authors_thunks'
import { getDirectionsTC } from 'store/thunks/directions_thunks'
import { getTagsTC } from 'store/thunks/tags_thunks'

export const NavigationContainer: FC = () => {
  const dispatch = useAppDispatch()

  const books = useSelector(selectBooks)

  useEffect(() => {
    dispatch(getDirectionsTC())
    dispatch(getAuthorsTC())
    dispatch(getTagsTC())
  }, [])

  return (
    <div className={style.container}>
      <div className={style.preview}>
        <SearchField />
        <div className={style.body}>
          <div>
            <h1>Помощь Frontend-разработчику</h1>
            <PreviewBooksContainer books={books} />
          </div>
          <div>
            <h1>Помощь Backend-разработчику</h1>
            <PreviewBooksContainer books={books} />
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
