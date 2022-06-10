import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { ArticleType } from 'store/types/ArticleType'

export const articlesAPI = {
  getArticles: () => instance.get<ArticleType[]>(`${RequestSource.ARTICLES}`),
}
