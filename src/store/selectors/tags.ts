import { RootState } from 'store/store'
import { TagsType } from 'store/types/TagsType'

export const selectTags = (state: RootState): TagsType[] => state.tags.tags
