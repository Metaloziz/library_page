import { ChangeEvent, FC, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/commonComponents/Button/Button'
import style from 'pages/CreationPage/NewAuthorForm/NewAuthorForm.module.scss'
import { AuthorType } from 'store/types/AuthorType'

type SectionFormPropsType = {
  setAuthor: (author: AuthorType) => void
  mode: 'add' | 'edit'
  authors?: AuthorType[]
}

export const NewAuthorForm: FC<SectionFormPropsType> = ({ setAuthor, mode, authors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorType>({ mode: 'onChange' })

  const [authorName, setAuthorName] = useState<string>('')

  const onSubmit: SubmitHandler<AuthorType> = data => {
    setAuthor(data)
  }
  const selectAuthorName = (event: ChangeEvent<HTMLSelectElement>): void => {
    authors?.forEach(author => {
      if (author.uuid === event.currentTarget.value) {
        setAuthorName(author.full_name)
      }
    })
  }

  const select =
    mode === 'edit' ? (
      <div>
        <label htmlFor="section">Автор</label>
        <select
          id="section"
          defaultValue={1}
          {...register('uuid')}
          onChange={selectAuthorName}
        >
          {authors?.map(({ uuid, full_name }) => (
            <option key={uuid} value={uuid}>
              {full_name}
            </option>
          ))}
        </select>
      </div>
    ) : null

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <div>
        <label>Имя автора</label>
        <input
          {...register('full_name', {
            maxLength: { value: 15, message: '15 символов максимум' },
            minLength: { value: 3, message: '3 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          defaultValue={authorName}
          placeholder="имя"
        />
        <p>{errors.full_name?.message}</p>
      </div>
      <div>{select}</div>
      <Button name="отправить" type="submit" />
    </form>
  )
}
