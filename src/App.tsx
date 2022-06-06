import { FC, useEffect } from 'react'

import style from 'App.module.scss'
import { ErrorComponent, Loader, RoutesComponent } from 'components'
import { Menu } from 'components/Menu'
import { useAppDispatch } from 'store/store'
import { getContactsTC, getCoursesTC } from 'store/thunks'
import { getDirectionsTC } from 'store/thunks/directions_thunks'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // возможно есть место получше для useEffect
  useEffect(() => {
    dispatch(getCoursesTC())
    dispatch(getContactsTC())
    dispatch(getDirectionsTC())
  }, [])

  return (
    <div className={style.container}>
      <Loader />
      <Menu />
      <RoutesComponent />
      <ErrorComponent />
    </div>
  )
}

export default App
