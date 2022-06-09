import { BookType } from 'store/types/BookType'

export type PopularNewsPreviewPropsType = {
  setCurrentBook: (bookId: string) => void
  books: BookType[]
}
