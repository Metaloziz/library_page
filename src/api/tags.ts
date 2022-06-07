import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'

export type TagsType = {
  uuid: string
  name: string
}

export const tagsAPI = {
  getTags: () => instance.get<TagsType[]>(`${RequestSource.TAGS}`),
}
