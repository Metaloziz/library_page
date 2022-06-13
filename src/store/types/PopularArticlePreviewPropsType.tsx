import { ArticleType } from 'store/types/ArticleType'

export type PopularArticlePreviewPropsType = {
  setCurrentArticle: (articleId: string) => void
  article: ArticleType[]
}
