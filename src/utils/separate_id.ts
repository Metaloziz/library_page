import { SECOND_ARRAY_ITEM } from 'constants/constants'

export const separateId = (response: string): string =>
  response.split(':')[SECOND_ARRAY_ITEM].trim()
