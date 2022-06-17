import { FC } from 'react'

import style from './CreationPage.module.scss'

import { NavLinkComponent } from 'components'
import { Path } from 'enums'
import { EditAuthor } from 'pages/CreationPage/EditAuthor/EditAuthor'

export const CreationPage: FC = () => (
  <div className={style.container}>
    <h1>Добавить</h1>
    <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
    <EditAuthor />
  </div>
)
