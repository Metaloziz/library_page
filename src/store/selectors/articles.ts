import { RootState } from 'store/store'
import { ArticleType } from 'store/types/ArticleType'

export const selectArticles = (state: RootState): ArticleType[] => state.articles.articles
export const selectArticle = (state: RootState): ArticleType =>
  state.articles.currentArticle

export const selectArticleFile = (state: RootState): any => state.articles.file
