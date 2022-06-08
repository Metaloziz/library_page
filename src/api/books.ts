import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { BookType } from 'store/types/BookType'

export const booksAPI = {
  getBooks: () => instance.get<BookType[]>(`${RequestSource.BOOKS}`),
}
