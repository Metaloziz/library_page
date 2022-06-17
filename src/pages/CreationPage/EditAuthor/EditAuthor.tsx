import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './EditAuthor.module.scss'

import { Author } from 'pages/CreationPage/EditAuthor/Author/Author'
import { NewAuthorForm } from 'pages/CreationPage/EditAuthor/NewAuthorForm/NewAuthorForm'
import { selectAuthors } from 'store/selectors/authors'
import { useAppDispatch } from 'store/store'
import { deleteAuthorTC, postAuthorTC, updateAuthorTC } from 'store/thunks/authors_thunks'
import { AuthorType } from 'store/types/AuthorType'

export const EditAuthor: FC = () => {
  const dispatch = useAppDispatch()
  const authors = useSelector(selectAuthors)

  const deleteAuthor = (authorId: string): void => {
    dispatch(deleteAuthorTC(authorId))
  }

  const createAuthor = (authorName: AuthorType): void => {
    dispatch(postAuthorTC({ full_name: authorName.full_name }))
  }

  const updateAuthor = (author: AuthorType): void => {
    dispatch(updateAuthorTC(author))
  }

  const authorTag = authors.map(author => (
    <Author key={author.uuid} author={author} deleteAuthor={deleteAuthor} />
  ))

  return (
    <div className={style.container}>
      <div>
        <h4>Добавить нового автора:</h4>
        <NewAuthorForm mode="add" setAuthor={createAuthor} />
      </div>
      <div>
        <h4>Изменить автора:</h4>
        <NewAuthorForm mode="edit" setAuthor={updateAuthor} authors={authors} />
      </div>
      <div>
        <h4>Все авторы:</h4>
        <div className={style.listItems}>{authorTag}</div>
      </div>
    </div>
  )
}
