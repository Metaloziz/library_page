import { FC } from 'react'

import style from 'pages/CurrentArticle/PopularArticlePreview/PopularArticlePreview.module.scss'
import { PopularArticlePreviewBody } from 'pages/CurrentArticle/PopularArticlePreview/PopularArticlePreviewBody/PopularArticlePreviewBody'
import { PopularArticlePreviewPropsType } from 'store/types/PopularArticlePreviewPropsType'

export const PopularArticlePreview: FC<PopularArticlePreviewPropsType> = ({
  article,
  setCurrentArticle,
}) => (
  <div className={style.container}>
    <h3>Популярные статьи</h3>
    {article.map(item => (
      <PopularArticlePreviewBody
        key={item.uuid}
        article={item}
        setCurrentArticle={setCurrentArticle}
      />
    ))}
  </div>
)
