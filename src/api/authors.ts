import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { AuthorNameType } from 'store/types/AuthorNameType'
import { AuthorType } from 'store/types/AuthorType'
import { EditAuthorResponseType } from 'store/types/EditAuthorResponseType'

export const authorsAPI = {
  getAuthors: () => instance.get<AuthorType[]>(RequestSource.AUTHORS),

  getAuthor: (authorId: string) =>
    instance.get<AuthorType>(`${RequestSource.AUTHOR}/${authorId} `),

  postAuthor: (authorName: AuthorNameType) =>
    instance.post<EditAuthorResponseType>(RequestSource.AUTHOR, authorName),

  updateAuthor: (author: AuthorType) =>
    instance.put<EditAuthorResponseType>(RequestSource.AUTHOR, author),

  deleteAuthor: (authorId: string) =>
    instance.delete<EditAuthorResponseType>(`${RequestSource.AUTHOR}/${authorId}`),
}
