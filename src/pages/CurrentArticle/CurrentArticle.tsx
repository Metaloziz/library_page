import { FC } from 'react'

import { useSelector } from 'react-redux'

import { ArticleBody } from './ArticleBody/ArticleBody'

import { Footer, MobileNavigation, SearchField } from 'components'
import { PREVIEW_ITEMS_COUNT } from 'constants/constants'
import style from 'pages/CurrentArticle/CurrentArticle.module.scss'
import { PopularArticlePreview } from 'pages/CurrentArticle/PopularArticlePreview/PopularArticlePreview'
import { setCurrentArticleAC } from 'store/reducers/articles_reducer'
import { selectArticle, selectArticles } from 'store/selectors/articles'
import { useAppDispatch } from 'store/store'
import { getRandomItems } from 'utils/getRandomItems'

const CurrentArticle: FC = () => {
  const dispatch = useAppDispatch()

  const article = useSelector(selectArticle)

  const articles = useSelector(selectArticles)
  const previewArticles = getRandomItems(articles, PREVIEW_ITEMS_COUNT)

  const setCurrentArticle = (articleId: string): void => {
    dispatch(setCurrentArticleAC(articleId))
  }

  return (
    <div className={style.container}>
      <MobileNavigation />
      <div className={style.bodyContainer}>
        <SearchField />
        <div className={style.body}>
          <ArticleBody article={article} isAdmin={false} />
          <PopularArticlePreview
            article={previewArticles}
            setCurrentArticle={setCurrentArticle}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default CurrentArticle
