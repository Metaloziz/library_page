import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { AuthorType } from 'store/reducers/author_reducer'

export const authorsAPI = {
  getAllAuthors: () => instance.get<AuthorType[]>(`${RequestSource.AUTHORS}`),
}
