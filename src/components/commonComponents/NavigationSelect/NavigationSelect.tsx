import { FC } from 'react'

import style from './NavigationSelect.module.scss'

import { SectionButton } from 'components/SectionButton'
import { DirectionType } from 'store/types/DirectionType'

type NavigationDirectionPT = {
  sections: DirectionType[]
  activeSectionId: string
  handleCurrentSection: (sectionId: string) => void
}

export const NavigationSelect: FC<NavigationDirectionPT> = ({
  sections,
  activeSectionId,
  handleCurrentSection,
}) => {
  const setCurrentCount = (sectionId: string): void => {
    handleCurrentSection(sectionId)
  }

  return (
    <div className={style.container}>
      {sections.map(section => (
        <SectionButton
          key={section.uuid}
          isActive={section.uuid === activeSectionId}
          name={section.name}
          onClick={() => setCurrentCount(section.uuid)}
        />
      ))}
    </div>
  )
}
