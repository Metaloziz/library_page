import { RootState } from 'store/store'
import { ArticleType } from 'store/types/ArticleType'

export const selectArticles = (state: RootState): ArticleType[] => state.articles.articles
