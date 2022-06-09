import { BookType } from 'store/types/BookType'

export type PopularBookPreviewBodyPT = {
  setCurrentBook: (bookId: string) => void
  book: Pick<BookType, 'title' | 'author' | 'edition_date' | 'uuid' | 'image_url'>
}
