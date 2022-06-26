import { FC } from 'react'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Select from 'react-select'

import style from './BookForm.module.scss'

import { Button } from 'components/commonComponents/Button/Button'
import { difficultyItems, FIRST_ARRAY_ITEM, languageItems } from 'constants/constants'
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
      <div className={style.direction}>
        <label>Раздел:</label>
        <Controller
          control={control}
          name="direction_uuid"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              required
              defaultValue={directions.map(convertItemsSelectType)[FIRST_ARRAY_ITEM]}
              options={directions.map(convertItemsSelectType)}
              onChange={val => onChange(val)}
            />
          )}
        />
      </div>
      <div className={style.select}>
        <label>Автор:</label>
        <Controller
          control={control}
          name="author_uuid"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              required
              defaultValue={authors.map(convertAuthorSelectType)[FIRST_ARRAY_ITEM]}
              options={authors.map(convertAuthorSelectType)}
              onChange={val => onChange(val!.value)}
            />
          )}
        />
      </div>
      <div className={style.select}>
        <label>Сложность:</label>
        <Controller
          control={control}
          name="difficulty"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              required
              defaultValue={difficultyItems[FIRST_ARRAY_ITEM]}
              options={difficultyItems}
              onChange={val => onChange(val!.value)}
            />
          )}
        />
        {/* <select */}
        {/*  {...register('difficulty', { */}
        {/*    required: { value: true, message: 'обязательное поле' }, */}
        {/*  })} */}
        {/* > */}
        {/*  {difficultyItems.map(item => ( */}
        {/*    <option key={item} value={item}> */}
        {/*      {item} */}
        {/*    </option> */}
        {/*  ))} */}
        {/* </select> */}
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
          placeholder="1999"
        />
        <p>{errors.edition_date?.message}</p>
      </div>
      <div className={style.textArea}>
        <label>Описание:</label>
        <textarea
          {...register('description', {
            minLength: { value: 4, message: '4 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          required
          rows={6}
        />
        <p>{errors.description?.message}</p>
      </div>
      <div className={style.select}>
        <label>Язык книги:</label>
        <select
          {...register('language', {
            required: { value: true, message: 'обязательное поле' },
          })}
        >
          {languageItems.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={style.select}>
        <label>Теги:</label>
        <Controller
          control={control}
          name="tags_uuids"
          render={({ field: { ref, onChange } }) => (
            <Select
              // @ts-ignore // todo надо придумать как убрать
              inputRef={ref}
              defaultValue={tags.map(convertItemsSelectType)[FIRST_ARRAY_ITEM]}
              options={tags.map(convertItemsSelectType)}
              onChange={val => onChange(val!.value)}
            />
          )}
        />
      </div>
      <div className={style.select}>
        <label>Обложка: </label>
        <input
          {...register('image', {
            required: { value: true, message: 'обязательное поле' },
          })}
          type="file"
          accept="image/png, image/jpeg"
        />
        <p>{errors.image?.message}</p>
      </div>
      <div className={style.select}>
        <label>Файл, PDF: </label>
        <input
          {...register('file', {
            required: { value: true, message: 'обязательное поле' },
          })}
          type="file"
          accept="application/pdf,application/vnd.ms-excel"
        />
      </div>
      <p>{errors.file?.message}</p>

      <Button name="отправить" type="submit" />
    </form>
  )
}
