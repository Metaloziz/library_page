import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './DirectionNavigation.module.scss'

import { NavigationSelect } from 'components/commonComponents/NavigationSelect'
import { setDirectionAC } from 'store/reducers/direction_reducer'
import { selectActiveDirection, selectDirections } from 'store/selectors/directions'
import { useAppDispatch } from 'store/store'

export const DirectionNavigation: FC = () => {
  const dispatch = useAppDispatch()

  const directions = useSelector(selectDirections)
  const activeDirectionId = useSelector(selectActiveDirection)

  const setDirection = (directionId: number): void => {
    dispatch(setDirectionAC(directionId))
  }

  return (
    <div className={style.container}>
      <h3>Разделы</h3>
      <span>
        <NavigationSelect
          sections={directions}
          activeSectionId={activeDirectionId}
          handleCurrentSection={setDirection}
        />
      </span>
    </div>
  )
}
