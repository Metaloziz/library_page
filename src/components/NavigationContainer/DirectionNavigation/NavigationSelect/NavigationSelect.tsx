import { FC } from 'react'

import style from './NavigationSelect.module.scss'

import { SectionButton } from 'components/SectionButton'

export type DirectionType = {
  uuid: number
  name: string
}

type NavigationDirectionPT = {
  sections: DirectionType[]
  activeSectionId: number
  handleCurrentCount: (value: number) => void
}

export const NavigationSelect: FC<NavigationDirectionPT> = ({
  sections,
  activeSectionId,
  handleCurrentCount,
}) => {
  const setCurrentCount = (directionId: number): void => {
    handleCurrentCount(directionId)
  }

  return (
    <div className={style.container} role="button" tabIndex={0}>
      <div className={style.items}>
        {sections.map(section => (
          <div
            key={section.uuid}
            tabIndex={-1}
            role="button"
            onClick={() => setCurrentCount(section.uuid)}
          >
            <SectionButton
              isActive={section.uuid === activeSectionId}
              name={section.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
