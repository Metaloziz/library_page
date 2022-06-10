import { FC } from 'react'

import style from '../PopularArticlePreview.module.scss'

import { ArticleType } from 'store/types/ArticleType'
import { convertTitle } from 'utils/convert_title'

type PopularNewsPreviewBodyPropsType = {
  setCurrentArticle: (articleId: string) => void
  article: ArticleType
}
export const PopularArticlePreviewBody: FC<PopularNewsPreviewBodyPropsType> = ({
  setCurrentArticle,
  article,
}) => (
  <div
    tabIndex={0}
    role="button"
    className={style.news}
    onClick={() => setCurrentArticle(article.uuid)}
  >
    <h4> {convertTitle(article.title)}</h4>
    <span>{article.description}</span>
    <div>Читать далее</div>
  </div>
)
