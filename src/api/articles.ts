import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { ArticleType } from 'store/types/ArticleType'

export const articlesAPI = {
  getArticles: () => instance.get<ArticleType[]>(`${RequestSource.ARTICLES}`),

  loadArticleFile: () =>
    instance.get(
      `http://localhost:1000/file/article?uuid=11&file=author(1)-title(article_three).docx`,
    ),
}
