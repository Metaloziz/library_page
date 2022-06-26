import { ChangeEvent, FC, useState } from 'react'

import style from './CreationPage.module.scss'

import { NavLinkComponent } from 'components'
import { selectorElements } from 'constants/creationPageSelector'
import { Path } from 'enums'
import {
  ActiveMode,
  CreationPageModeType,
} from 'pages/CreationPage/ActiveMode/ActiveMode'

export const CreationPage: FC = () => {
  const [activeMode, setActiveMode] = useState<CreationPageModeType>('book')

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
          {selectorElements.map(({ value, name }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <ActiveMode mode={activeMode} />
    </div>
  )
}
