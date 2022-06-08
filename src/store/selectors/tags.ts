import { RootState } from 'store/store'
import { TagType } from 'store/types/TagType'

export const selectTags = (state: RootState): TagType[] => state.tags.tags
