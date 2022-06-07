import { AuthorType } from 'store/reducers/author_reducer'
import { RootState } from 'store/store'

export const selectAuthors = (state: RootState): AuthorType[] => state.authors.authors
