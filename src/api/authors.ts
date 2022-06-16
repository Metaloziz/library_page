import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { AuthorNameType } from 'store/types/AuthorNameType'
import { AuthorType } from 'store/types/AuthorType'
import { PostAuthorResponseType } from 'store/types/PostAuthorResponseType'

export const authorsAPI = {
  getAuthors: () => instance.get<AuthorType[]>(`${RequestSource.AUTHORS}`),
  getAuthor: (authorId: string) =>
    instance.get<AuthorType>(`${RequestSource.AUTHOR}/${authorId} `),
  postAuthor: (authorName: AuthorNameType) =>
    instance.post<PostAuthorResponseType>(`${RequestSource.AUTHOR}`, authorName),
}
