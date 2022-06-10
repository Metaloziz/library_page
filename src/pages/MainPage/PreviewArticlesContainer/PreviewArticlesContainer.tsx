import { FC } from 'react'

import { useSelector } from 'react-redux'

import { BASE_URL } from 'constants/constants'
import style from 'pages/MainPage/PreviewArticlesContainer/PreviewArticlesContainer.module.scss'
import { selectArticles } from 'store/selectors/articles'
import { convertTitle } from 'utils/convert_title'

export const PreviewArticlesContainer: FC = () => {
  const articles = useSelector(selectArticles)

  return (
    <div className={style.container}>
      {articles.map(({ title, image_url, uuid }) => (
        <div key={uuid} className={style.item}>
          <img alt="" src={BASE_URL + image_url} />
          <h5>{convertTitle(title)}</h5>
        </div>
      ))}
    </div>
  )
}
