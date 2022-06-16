import { FC } from 'react'

import { useSelector } from 'react-redux'

import { DirectionNavigation } from './DirectionNavigation/DirectionNavigation'
import style from './PreviewContainer.module.scss'

import { NavLinkComponent, SearchField } from 'components/commonComponents'
import { AuthorNavigation } from 'components/PreviewContainer/AuthorNavigation/AuthorNavigation'
import { ContentTypeNavigation } from 'components/PreviewContainer/ContentTypeNavigation/ContentTypeNavigation'
import { TagsNavigation } from 'components/PreviewContainer/TagsNavigation/TagsNavigation'
import { Path } from 'enums'
import { PreviewArticlesContainer } from 'pages/MainPage/PreviewArticlesContainer/PreviewArticlesContainer'
import { PreviewBooksContainer } from 'pages/MainPage/PreviewBooksContainer/PreviewBooksContainer'
import { PreviewVideoContainer } from 'pages/MainPage/PreviewVideosContainer/PreviewVideoContainer'
import { selectIsAdminMode } from 'store/selectors'

export const PreviewContainer: FC = () => {
  const isAdmin = useSelector(selectIsAdminMode)

  return (
    <div className={style.container}>
      <div className={style.preview}>
        <SearchField />
        {isAdmin && (
          <NavLinkComponent nameButton="на страницу создания" path={Path.CREATION_PAGE} />
        )}
        <div className={style.body}>
          <div className={style.block}>
            <h1>Помощь Frontend-разработчику</h1>
            <PreviewBooksContainer />
          </div>
          <div className={style.block}>
            <h1>Помощь Backend-разработчику</h1>
            <PreviewBooksContainer />
          </div>
          <div className={style.block}>
            <h1>Видео</h1>
            <PreviewVideoContainer />
          </div>
          <div className={style.block}>
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
