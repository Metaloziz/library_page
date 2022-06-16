import { FC } from 'react'

import { BASE_IMAGE_URL } from 'constants/constants'
import style from 'pages/MainPage/PreviewArticlesContainer/PreviewArticlesContainer.module.scss'
import { ArticleType } from 'store/types/ArticleType'
import { convertTitle } from 'utils/convert_title'

type PreviewArticlesContainerPT = {
  articles: ArticleType[]
  setCurrentArticleHandle: (articleId: string) => void
}

export const PreviewArticlesContainer: FC<PreviewArticlesContainerPT> = ({
  setCurrentArticleHandle,
  articles,
}) => (
  <div className={style.container}>
    {articles.map(({ title, image_url, uuid }) => (
      <div
        role="button"
        tabIndex={0}
        key={uuid}
        className={style.item}
        onClick={() => setCurrentArticleHandle(uuid)}
      >
        <img alt="" src={BASE_IMAGE_URL + image_url} />
        <h5>{convertTitle(title)}</h5>
      </div>
    ))}
  </div>
)
