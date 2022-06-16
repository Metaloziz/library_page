import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './CreationPage.module.scss'

import { NavLinkComponent } from 'components'
import { Path } from 'enums'
import { Author } from 'pages/CreationPage/Author/Author'
import { NewAuthorForm } from 'pages/CreationPage/NewAuthorForm/NewAuthorForm'
import { selectAuthors } from 'store/selectors/authors'
import { useAppDispatch } from 'store/store'
import { postAuthorTC } from 'store/thunks/authors_thunks'
import { AuthorNameType } from 'store/types/AuthorNameType'

export const CreationPage: FC = () => {
  const authors = useSelector(selectAuthors)
  const dispatch = useAppDispatch()

  const deleteSection = (): void => {}

  const createAuthor = (authorName: AuthorNameType): void => {
    dispatch(postAuthorTC(authorName))
  }

  const authorTag = authors.map(author => (
    <Author key={author.uuid} author={author} deleteAuthor={deleteSection} />
  ))

  return (
    <div className={style.container}>
      <h1>Добавить</h1>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <NewAuthorForm mode="add" setSectionData={createAuthor} />
      <NewAuthorForm mode="edit" setSectionData={createAuthor} sections={authors} />
      <div className={style.listItems}>{authorTag}</div>
    </div>
  )
}
