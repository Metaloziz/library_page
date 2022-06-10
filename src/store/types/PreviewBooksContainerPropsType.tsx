import { BookType } from 'store/types/BookType'
import { DefaultDivPropsType } from 'store/types/DefaultDivPropsType'

export type PreviewBooksContainerPropsType = DefaultDivPropsType & {
  books: BookType[]
  setCurrentBookHandle: (bookId: string) => void
}
