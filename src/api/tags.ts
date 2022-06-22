import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { EditElementResponseType } from 'store/types/EditElementResponseType'
import { TagNamePostType } from 'store/types/TagNamePostType'
import { TagType } from 'store/types/TagType'

export const tagsAPI = {
  getTags: () => instance.get<TagType[]>(RequestSource.TAGS),

  postTag: (newTag: TagNamePostType) =>
    instance.post<EditElementResponseType>(RequestSource.TAG, newTag),

  updateAuthor: (newTag: TagType) =>
    instance.put<EditElementResponseType>(RequestSource.TAG, newTag),

  deleteTag: (tagId: string) =>
    instance.delete<EditElementResponseType>(`${RequestSource.TAG}/${tagId}`),
}
