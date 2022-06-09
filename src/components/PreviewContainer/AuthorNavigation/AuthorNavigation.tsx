import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './AuthorNavigation.module.scss'

import { SectionButton } from 'components/SectionButton'
import { selectAuthors } from 'store/selectors/authors'

export const AuthorNavigation: FC = () => {
  const authors = useSelector(selectAuthors)

  return (
    <div className={style.container}>
      <h3>Авторы</h3>
      <div>
        {authors.map(({ uuid, full_name }) => (
          <SectionButton key={uuid} name={full_name} isActive={false} />
        ))}
      </div>
    </div>
  )
}
