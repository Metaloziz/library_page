import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { AuthorNameType } from 'store/types/AuthorNameType'
import { AuthorType } from 'store/types/AuthorType'
import { EditElementResponseType } from 'store/types/EditElementResponseType'

export const authorsAPI = {
  getAuthors: () => instance.get<AuthorType[]>(RequestSource.AUTHORS),

  getAuthor: (authorId: string) =>
    instance.get<AuthorType>(`${RequestSource.AUTHOR}/${authorId} `),

  postAuthor: (authorName: AuthorNameType) =>
    instance.post<EditElementResponseType>(RequestSource.AUTHOR, authorName),

  updateAuthor: (author: AuthorType) =>
    instance.put<EditElementResponseType>(RequestSource.AUTHOR, author),

  deleteAuthor: (authorId: string) =>
    instance.delete<EditElementResponseType>(`${RequestSource.AUTHOR}/${authorId}`),
}
