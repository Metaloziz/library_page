import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from 'pages/CreationPage/EditDirection/EditDirection.module.scss'
import { Tag } from 'pages/CreationPage/EditTag/Tag/Tag'
import { TagForm } from 'pages/CreationPage/EditTag/TagForm/TagForm'
import { selectTags } from 'store/selectors/tags'
import { useAppDispatch } from 'store/store'
import { postTagsTC } from 'store/thunks/tags_thunks'
import { TagNamePostType } from 'store/types/TagNamePostType'
import { TagType } from 'store/types/TagType'

export const EditTag: FC = () => {
  const dispatch = useAppDispatch()
  const tags = useSelector(selectTags)

  const deleteTag = (id: string): void => {
    // dispatch(deleteDirectionTC(id))
  }

  const createTag = ({ name }: TagNamePostType): void => {
    dispatch(postTagsTC({ name }))
  }

  const updateTag = (tag: TagType): void => {
    // dispatch(updateDirectionTC(direction))
  }

  const tagsElements = tags.map(tag => (
    <Tag key={tag.uuid} tag={tag} deleteTag={deleteTag} />
  ))

  return (
    <div className={style.container}>
      <div>
        <h4>Добавить новый тег:</h4>
        <TagForm mode="add" setTag={createTag} />
      </div>
      <div>
        <h4>Изменить имя тега:</h4>
        <TagForm mode="edit" setTag={updateTag} tags={tags} />
      </div>
      <div>
        <h4>Все разделы:</h4>
        <div className={style.listItems}>{tagsElements}</div>
      </div>
    </div>
  )
}
