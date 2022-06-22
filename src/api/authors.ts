import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { AuthorNamePostType } from 'store/types/AuthorNamePostType'
import { AuthorType } from 'store/types/AuthorType'
import { EditElementResponseType } from 'store/types/EditElementResponseType'

export const authorsAPI = {
  getAuthors: () => instance.get<AuthorType[]>(RequestSource.AUTHORS),

  postAuthor: (authorName: AuthorNamePostType) =>
    instance.post<EditElementResponseType>(RequestSource.AUTHOR, authorName),

  updateAuthor: (author: AuthorType) =>
    instance.put<EditElementResponseType>(RequestSource.AUTHOR, author),

  deleteAuthor: (authorId: string) =>
    instance.delete<EditElementResponseType>(`${RequestSource.AUTHOR}/${authorId}`),
}
