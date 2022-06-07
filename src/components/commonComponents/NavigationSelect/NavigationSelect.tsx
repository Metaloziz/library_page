import { FC } from 'react'

import style from './NavigationSelect.module.scss'

import { SectionButton } from 'components/SectionButton'
import { DirectionType } from 'store/types/DirectionType'

type NavigationDirectionPT = {
  sections: DirectionType[]
  activeSectionId: number
  handleCurrentSection: (sectionId: number) => void
}

export const NavigationSelect: FC<NavigationDirectionPT> = ({
  sections,
  activeSectionId,
  handleCurrentSection,
}) => {
  const setCurrentCount = (sectionId: number): void => {
    handleCurrentSection(sectionId)
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
