import { RootState } from 'store/store'
import { ContentType } from 'store/types/ContentType'

export const selectContentType = (state: RootState): ContentType => state.contentType
