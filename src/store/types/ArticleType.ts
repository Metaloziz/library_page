import { TagType } from 'store/types/TagType'

export type ArticleType = {
  uuid: string
  title: string
  direction: {
    uuid: string
    name: string
  }
  difficulty: string
  author: {
    uuid: string
    full_name: string
  }
  edition_date: string
  description: string
  local_url: string
  image_url: string
  language: string
  tags: TagType[]
}
