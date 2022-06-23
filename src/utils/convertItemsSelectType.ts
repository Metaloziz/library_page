import { AuthorType } from 'store/types/AuthorType'
import { TagType } from 'store/types/TagType'

type SelectItemType = { value: string; label: string }

export const convertItemsSelectType = <T>(item: T & TagType): SelectItemType => {
  const newItem: SelectItemType = { value: '', label: '' }

  newItem.value = item.uuid
  newItem.label = item.name

  return newItem
}

export const convertAuthorSelectType = (item: AuthorType): SelectItemType => {
  const newItem: SelectItemType = { value: '', label: '' }

  newItem.value = item.uuid
  newItem.label = item.full_name

  return newItem
}
