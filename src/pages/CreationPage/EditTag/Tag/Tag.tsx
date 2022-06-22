import { FC } from 'react'

import { DeleteButton } from 'components'
import style from 'pages/CreationPage/EditTag/Tag/Tag.module.scss'
import { TagType } from 'store/types/TagType'

type TagPropsType = {
  tag: TagType
  deleteTag: (id: string) => void
}

export const Tag: FC<TagPropsType> = ({ tag: { uuid, name }, deleteTag }) => (
  <div>
    <div className={style.container}>
      <div>
        <span>
          {uuid} - {name}
        </span>
      </div>
      <DeleteButton name="удалить" onClick={() => deleteTag(uuid)} />
    </div>
  </div>
)
