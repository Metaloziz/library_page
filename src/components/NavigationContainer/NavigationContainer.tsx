import { FC } from 'react'

import { SearchField } from 'components/commonComponents'
import style from 'components/NavigationContainer/NavigationContainer.module.scss'
import { PreviewBooksContainer } from 'components/NavigationContainer/PreviewBooksContainer/PreviewBooksContainer'

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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque error esse
      iure laudantium minima nam natus nulla odit provident quod quos sed sequi sint vel
      veritatis voluptas, voluptate voluptatum!
    </div>
  </div>
)
