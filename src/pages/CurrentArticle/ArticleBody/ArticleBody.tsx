import { FC } from 'react'

import { NavLinkComponent } from 'components'
import { BASE_URL } from 'constants/constants'
import { Path } from 'enums'
import style from 'pages/CurrentArticle/ArticleBody/ArticleBody.module.scss'
import { ArticleType } from 'store/types/ArticleType'
import { convertDateView } from 'utils'
import { convertTitle } from 'utils/convert_title'

type ArticleBodyPropsType = {
  article: ArticleType
  isAdmin: boolean
}

export const ArticleBody: FC<ArticleBodyPropsType> = ({
  article: { title, edition_date, image_url, description },
  isAdmin,
}) => (
  <div className={style.container}>
    <div className={style.header}>
      <div className={style.date}>{convertDateView(edition_date)}</div>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      {isAdmin && <NavLinkComponent nameButton="редактировать" path={Path.MAIN} />}
      <div>
        <h1>{convertTitle(title)}</h1>
      </div>
    </div>
    <div className={style.body}>
      <img alt="logo" src={BASE_URL + image_url} />
      <div className={style.description}>{description}</div>
    </div>
  </div>
)
