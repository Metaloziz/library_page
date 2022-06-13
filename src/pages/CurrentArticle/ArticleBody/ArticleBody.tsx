import { FC } from 'react'

import DocViewer, { DocViewerRenderers } from 'react-doc-viewer'

import style from './ArticleBody.module.scss'

import { NavLinkComponent } from 'components'
import { BASE_URL } from 'constants/constants'
import { Path } from 'enums'
import { ArticleBodyPropsType } from 'store/types/ArticleBodyPropsType'
import { convertDateView } from 'utils'
import { convertTitle } from 'utils/convert_title'

export const ArticleBody: FC<ArticleBodyPropsType> = ({
  article: { title, edition_date, image_url, description },
  isAdmin,
}) => {
  const docs = [
    {
      uri: 'http://localhost:1000/file/article?uuid=10&file=author(1)-title(article_three).docx',
    },
  ]

  return (
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
        <div>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        </div>
      </div>
    </div>
  )
}
