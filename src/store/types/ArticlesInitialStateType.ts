import { ArticleType } from 'store/types/ArticleType'

export type ArticlesInitialStateType = {
  articles: ArticleType[]
  currentArticle: ArticleType
  file: any
}
