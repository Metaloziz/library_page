import { FC } from 'react'

import { DirectionNavigation } from './DirectionNavigation/DirectionNavigation'
import { PreviewBooksContainer } from './PreviewBooksContainer/PreviewBooksContainer'

import { SearchField } from 'components/commonComponents'
import style from 'components/NavigationContainer/NavigationContainer.module.scss'

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
    </div>
  </div>
)
