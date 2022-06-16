import { FC } from 'react'

import { DeleteButton } from 'components'
import style from 'pages/CreationPage/Author/Author.module.scss'
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
