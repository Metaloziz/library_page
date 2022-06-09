import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { BookType } from 'store/types/BookType'

export type PreviewBooksContainerPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  books: BookType[]
  setCurrentBookHandle: (bookId: string) => void
}
