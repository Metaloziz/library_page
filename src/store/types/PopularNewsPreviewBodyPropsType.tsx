import { ArticleType } from 'store/types/ArticleType'

export type PopularNewsPreviewBodyPropsType = {
  setCurrentArticle: (articleId: string) => void
  article: ArticleType
}
