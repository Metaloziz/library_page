import { FC } from 'react'

import style from './Direction.module.scss'

import { DeleteButton } from 'components'
import { DirectionType } from 'store/types/DirectionType'

type DirectionPropsType = {
  direction: DirectionType
  deleteDirection: (id: string) => void
}

export const Direction: FC<DirectionPropsType> = ({
  direction: { uuid, name },
  deleteDirection,
}) => (
  <div>
    <div className={style.container}>
      <div>
        <span>
          {uuid} - {name}
        </span>
      </div>
      <DeleteButton name="удалить" onClick={() => deleteDirection(uuid)} />
    </div>
  </div>
)
