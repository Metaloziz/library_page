import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BASE_IMAGE_URL } from 'constants/constants'
import { Path } from 'enums'
import style from 'pages/MainPage/PreviewArticlesContainer/PreviewArticlesContainer.module.scss'
import { setCurrentArticleAC } from 'store/reducers/articles_reducer'
import { selectArticles } from 'store/selectors/articles'
import { useAppDispatch } from 'store/store'
import { getArticlesTC } from 'store/thunks/articles_thunks'
import { convertTitle } from 'utils/convert_title'

export const PreviewArticlesContainer: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getArticlesTC())
  }, [])

  const articles = useSelector(selectArticles)

  const setCurrentArticleHandle = useCallback((articleId: string): void => {
    navigate(Path.CURRENT_ARTICLE)
    dispatch(setCurrentArticleAC(articleId))
  }, [])

  return (
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
}
