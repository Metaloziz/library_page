import { FC } from 'react'

import { DirectionNavigation } from './DirectionNavigation/DirectionNavigation'

import { SearchField } from 'components/commonComponents'
import { ContentTypeNavigation } from 'components/NavigationContainer/ContentTypeNavigation/ContentTypeNavigation'
import style from 'components/NavigationContainer/NavigationContainer.module.scss'
import { PreviewBooksContainer } from 'pages/MainPage/PreviewBooksContainer/PreviewBooksContainer'

export const NavigationContainer: FC = () => (
  <div className={style.container}>
    <div className={style.preview}>
      <SearchField />
      <div className={style.body}>
        <PreviewBooksContainer />
        <PreviewBooksContainer />
        <PreviewBooksContainer />
      </div>
    </div>
    <div className={style.navigation}>
      <DirectionNavigation />
      <ContentTypeNavigation />
    </div>
  </div>
)
