import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './TagsNavigation.module.scss'

import { NavigationSelect } from 'components/commonComponents/NavigationSelect'
import { selectTags } from 'store/selectors/tags'

export const TagsNavigation: FC = () => {
  const tags = useSelector(selectTags)

  const setTags = (): void => {}

  return (
    <div className={style.container}>
      <h3>Темы \ Tags</h3>
      <div>
        <NavigationSelect
          sections={tags}
          activeSectionId="1"
          handleCurrentSection={setTags}
        />
      </div>
    </div>
  )
}
