import { FC } from 'react'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Select from 'react-select'

import style from './BookForm.module.scss'

import { Button } from 'components/commonComponents/Button/Button'
import { difficultyItems, languageItems } from 'constants/constants'
import { selectAuthors } from 'store/selectors/authors'
import { selectDirections } from 'store/selectors/directions'
import { selectTags } from 'store/selectors/tags'
import { BookPostType } from 'store/types/BookPostType'
import {
  convertAuthorSelectType,
  convertItemsSelectType,
} from 'utils/convertItemsSelectType'

type BookFormPropsType = {
  setBook: (book: BookPostType) => void
}

export const BookForm: FC<BookFormPropsType> = ({ setBook }) => {
  const directions = useSelector(selectDirections)
  const authors = useSelector(selectAuthors)
  const tags = useSelector(selectTags)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookPostType>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<BookPostType> = data => {
    setBook(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <div className={style.title}>
        <label>Заголовок книги:</label>
        <input
          {...register('title', {
            maxLength: { value: 50, message: '50 символов максимум' },
            minLength: { value: 3, message: '3 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          placeholder="Заголовок"
          defaultValue="Заголовок"
        />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label>Раздел:</label>
        <Controller
          control={control}
          name="direction_uuid"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              options={directions.map(convertItemsSelectType)}
              onChange={val => onChange(val!.value)}
            />
          )}
        />
      </div>
      <div>
        <label>Автор:</label>
        <Controller
          control={control}
          name="author_uuid"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              options={authors.map(convertAuthorSelectType)}
              onChange={val => onChange(val!.value)}
            />
          )}
        />
      </div>
      <div>
        <label>Сложность:</label>
        <select {...register('difficulty')}>
          {difficultyItems.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={style.year}>
        <label>Год издания:</label>
        <input
          {...register('edition_date', {
            maxLength: { value: 4, message: '4 символа максимум' },
            minLength: { value: 4, message: '4 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          type="number"
          defaultValue={2000}
        />
        <p>{errors.edition_date?.message}</p>
      </div>
      <div>
        <label>Описание:</label>
        <textarea
          {...register('description', {
            minLength: { value: 4, message: '4 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          defaultValue="обязательное поле"
          required
          rows={6}
        />
      </div>
      <div>
        <label>Язык книги:</label>
        <select {...register('language')}>
          {languageItems.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Теги:</label>
        <Controller
          control={control}
          name="tags_uuids"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              options={tags.map(convertItemsSelectType)}
              onChange={val => onChange(val!.value)}
            />
          )}
        />
      </div>
      <div>
        <label>Обложка: </label>
        <input {...register('image')} type="file" accept="image/png, image/jpeg" />
      </div>
      <div>
        <label>Файл, PDF: </label>
        <input
          {...register('file')}
          type="file"
          accept="application/pdf,application/vnd.ms-excel"
        />
      </div>

      <Button name="отправить" type="submit" />
    </form>
  )
}
