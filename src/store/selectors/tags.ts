import { TagsType } from 'api/tags'
import { RootState } from 'store/store'

export const selectTags = (state: RootState): TagsType[] => state.tags.tags
