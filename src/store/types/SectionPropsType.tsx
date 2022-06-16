import { AuthorType } from 'store/types/AuthorType'

export type SectionPropsType = {
  author: AuthorType
  deleteAuthor: (id: string) => void
}
