import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { TagType } from 'store/types/TagType'

export const tagsAPI = {
  getTags: () => instance.get<TagType[]>(`${RequestSource.TAGS}`),
}
