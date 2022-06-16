import { RootState } from 'store/store'
import { AuthorType } from 'store/types/AuthorType'

export const selectAuthors = (state: RootState): AuthorType[] => state.authors.authors
