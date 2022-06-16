import { FC } from 'react'

import { DirectionNavigation } from './DirectionNavigation/DirectionNavigation'
import style from './PreviewContainer.module.scss'

import { SearchField } from 'components/commonComponents'
import { AuthorNavigation } from 'components/PreviewContainer/AuthorNavigation/AuthorNavigation'
import { ContentTypeNavigation } from 'components/PreviewContainer/ContentTypeNavigation/ContentTypeNavigation'
import { TagsNavigation } from 'components/PreviewContainer/TagsNavigation/TagsNavigation'
import { PreviewArticlesContainer } from 'pages/MainPage/PreviewArticlesContainer/PreviewArticlesContainer'
import { PreviewBooksContainer } from 'pages/MainPage/PreviewBooksContainer/PreviewBooksContainer'
import { PreviewVideoContainer } from 'pages/MainPage/PreviewVideosContainer/PreviewVideoContainer'

export const PreviewContainer: FC = () => (
  <div className={style.container}>
    <div className={style.preview}>
      <SearchField />
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
