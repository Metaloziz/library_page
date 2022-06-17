import { ChangeEvent, FC, useState } from 'react'

import style from './CreationPage.module.scss'

import { NavLinkComponent } from 'components'
import { Path } from 'enums'
import {
  ActiveMode,
  CreationPageModeType,
} from 'pages/CreationPage/ActiveMode/ActiveMode'

export const CreationPage: FC = () => {
  const [activeMode, setActiveMode] = useState<CreationPageModeType>('direction')

  const selectActiveMode = (event: ChangeEvent<HTMLSelectElement>): void => {
    const mode = event.currentTarget.value as CreationPageModeType
    setActiveMode(mode)
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <h1>Добавить</h1>
      <label>
        <select id="section" onChange={selectActiveMode}>
          <option value="direction">Раздел</option>
          <option value="author">Автора</option>
        </select>
      </label>
      <ActiveMode mode={activeMode} />
    </div>
  )
}
