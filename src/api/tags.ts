import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { TagsType } from 'store/types/TagsType'

export const tagsAPI = {
  getTags: () => instance.get<TagsType[]>(`${RequestSource.TAGS}`),
}
