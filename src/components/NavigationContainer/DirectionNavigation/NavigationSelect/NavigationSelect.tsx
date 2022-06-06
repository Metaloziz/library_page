import { FC, useEffect, useRef, useState, KeyboardEvent } from 'react'

import style from './NavigationSelect.module.scss'

import arrow from 'assets/images/common/arrow.svg'
import { SectionButton } from 'components/SectionButton'
import { findIndexElement } from 'utils'

export type DirectionType = {
  uuid: number
  name: string
}

type NavigationDirectionPT = {
  sections: DirectionType[]
  activeSectionId: number
  handleCurrentCount: (value: number) => void
}

const NEX_PREVIOUS_ITEM = 1

export const NavigationSelect: FC<NavigationDirectionPT> = ({
  sections,
  activeSectionId,
  handleCurrentCount,
}) => {
  const defaultSection: DirectionType = { uuid: 1, name: 'темы' }

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<DirectionType>(defaultSection)

  useEffect(() => {
    if (activeSectionId !== Number(activeSection.uuid)) {
      setActiveSection(defaultSection)
    }
  }, [activeSectionId])

  const divLink = useRef<HTMLDivElement>(null)

  document.onclick = event => {
    if (!divLink.current!.contains(event.target as Node)) {
      setIsCollapsed(false)
    }
  }

  const handleViewSelector = (): void => setIsCollapsed(!isCollapsed)

  const setCurrentCount = (sectionId: number): void => {
    const activeSectionIndex = findIndexElement(sections, sectionId)
    handleCurrentCount(sectionId)
    setActiveSection(sections[activeSectionIndex])
    setIsCollapsed(!isCollapsed)
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
    const activeSectionIndex = findIndexElement(sections, activeSection.uuid)

    switch (e.key) {
      case 'ArrowDown':
        setIsCollapsed(true)
        if (sections[activeSectionIndex + NEX_PREVIOUS_ITEM]) {
          setActiveSection(sections[activeSectionIndex + NEX_PREVIOUS_ITEM])
        }
        break
      case 'ArrowUp':
        setIsCollapsed(true)
        if (sections[activeSectionIndex - NEX_PREVIOUS_ITEM]) {
          setActiveSection(sections[activeSectionIndex - NEX_PREVIOUS_ITEM])
        }
        break
      case 'Enter':
        setIsCollapsed(false)
        handleCurrentCount(activeSection.uuid)
        break
      case 'Escape':
        setIsCollapsed(false)
        setActiveSection(activeSection)
        break
      default:
    }
  }

  const selectElements = sections.map(section => (
    <div
      key={section.uuid}
      tabIndex={-1}
      role="button"
      onClick={() => setCurrentCount(section.uuid)}
    >
      <SectionButton isActive={section.uuid === activeSectionId} name={section.name} />
    </div>
  ))

  return (
    <div
      className={style.container}
      role="button"
      tabIndex={0}
      ref={divLink}
      id="select"
      onKeyUp={onKeyUp}
    >
      <div className={`${style.items} ${isCollapsed ? style.active : ''}`}>
        {isCollapsed && selectElements}
      </div>
      <div
        tabIndex={-2}
        role="button"
        className={style.title}
        onClick={handleViewSelector}
      >
        <SectionButton
          isActive={activeSection.uuid === activeSectionId}
          name={activeSection.name}
        />
        <img alt="arrow" src={arrow} className={`${isCollapsed && style.active}`} />
      </div>
    </div>
  )
}
