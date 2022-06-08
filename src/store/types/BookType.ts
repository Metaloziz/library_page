import { TagType } from 'store/types/TagType'

export type BookType = {
  uuid: string
  title: string
  direction: {
    uuid: string
    name: string
  }
  author: {
    uuid: string
    full_name: string
  }
  difficulty: string
  edition_date: string
  description: string
  local_url: string
  language: string
  tags: TagType[]
  image_url: string
}
