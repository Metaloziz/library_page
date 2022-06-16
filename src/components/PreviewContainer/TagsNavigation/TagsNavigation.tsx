import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './TagsNavigation.module.scss'

import { NavigationSelect } from 'components/commonComponents/NavigationSelect'
import { selectTags } from 'store/selectors/tags'
import { useAppDispatch } from 'store/store'
import { getTagsTC } from 'store/thunks/tags_thunks'

export const TagsNavigation: FC = () => {
  const tags = useSelector(selectTags)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTagsTC())
  }, [])

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
