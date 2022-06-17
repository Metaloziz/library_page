import { FC } from 'react'

import style from './Author.module.scss'

import { DeleteButton } from 'components'
import { SectionPropsType } from 'store/types/SectionPropsType'

export const Author: FC<SectionPropsType> = ({
  author: { uuid, full_name },
  deleteAuthor,
}) => (
  <div>
    <div className={style.container}>
      <div>
        <span>
          {uuid} - {full_name}
        </span>
      </div>
      <DeleteButton name="удалить" onClick={() => deleteAuthor(uuid)} />
    </div>
  </div>
)
