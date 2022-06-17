import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Direction } from 'pages/CreationPage/EditDirection/Direction/Direction'
import { DirectionForm } from 'pages/CreationPage/EditDirection/DirectionForm/DirectionForm'
import style from 'pages/CreationPage/EditDirection/EditDirection.module.scss'
import { selectDirections } from 'store/selectors/directions'
import { useAppDispatch } from 'store/store'
import {
  deleteDirectionTC,
  postDirectionsTC,
  updateDirectionTC,
} from 'store/thunks/directions_thunks'
import { DirectionType } from 'store/types/DirectionType'

export const EditDirection: FC = () => {
  const dispatch = useAppDispatch()
  const directions = useSelector(selectDirections)

  const deleteDirection = (id: string): void => {
    dispatch(deleteDirectionTC(id))
  }

  const createDirection = ({ name }: DirectionType): void => {
    dispatch(postDirectionsTC({ name }))
  }

  const updateAuthor = (direction: DirectionType): void => {
    dispatch(updateDirectionTC(direction))
  }

  const authorTag = directions.map(direction => (
    <Direction
      key={direction.uuid}
      direction={direction}
      deleteDirection={deleteDirection}
    />
  ))

  return (
    <div className={style.container}>
      <div>
        <h4>Добавить новый раздел:</h4>
        <DirectionForm mode="add" setDirection={createDirection} />
      </div>
      <div>
        <h4>Изменить имя раздела:</h4>
        <DirectionForm mode="edit" setDirection={updateAuthor} directions={directions} />
      </div>
      <div>
        <h4>Все разделы:</h4>
        <div className={style.listItems}>{authorTag}</div>
      </div>
    </div>
  )
}
