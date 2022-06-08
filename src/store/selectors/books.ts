import { RootState } from 'store/store'
import { BookType } from 'store/types/BookType'

export const selectBooks = (state: RootState): BookType[] => state.books.books
