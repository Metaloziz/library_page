import { TagType } from 'store/types/TagType'

export type VideoType = {
  uuid: string
  title: string
  direction: {
    uuid: string
    name: string
  }
  difficulty: string
  description: string
  local_url: string
  web_url: string
  language: string
  tags: TagType[]
}
