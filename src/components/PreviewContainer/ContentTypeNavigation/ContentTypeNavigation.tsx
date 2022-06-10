import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './ContentTypeNavigation.module.scss'

import { SectionButton } from 'components/SectionButton'
import {
  setAllContentTypeAC,
  setContentTypeAC,
} from 'store/reducers/content_types_reducer'
import { selectContentType } from 'store/selectors/content_types'
import { useAppDispatch } from 'store/store'
import { ActionPayloadType } from 'store/types/ContentType'

export const ContentTypeNavigation: FC = () => {
  const contentTypes = useSelector(selectContentType)
  const { isBooks, isArticle, isVideo } = contentTypes

  const dispatch = useAppDispatch()

  const setCurrentContentType = (value: ActionPayloadType): void => {
    dispatch(setContentTypeAC(value))
  }

  const setAllContentType = (): void => {
    dispatch(setAllContentTypeAC())
  }

  return (
    <div className={style.container}>
      <h3>Типы:</h3>
      <div>
        <SectionButton
          name="Все"
          isActive={isBooks && isArticle && isVideo}
          onClick={setAllContentType}
        />
        <SectionButton
          name="Книги"
          isActive={isBooks}
          onClick={() => setCurrentContentType({ name: 'isBooks', value: !isBooks })}
        />
        <SectionButton
          name="Статьи"
          isActive={isArticle}
          onClick={() => setCurrentContentType({ name: 'isArticle', value: !isArticle })}
        />
        <SectionButton
          name="Видео"
          isActive={isVideo}
          onClick={() => setCurrentContentType({ name: 'isVideo', value: !isVideo })}
        />
      </div>
    </div>
  )
}
