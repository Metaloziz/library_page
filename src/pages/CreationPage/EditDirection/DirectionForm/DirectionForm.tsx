import { ChangeEvent, FC, useEffect, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './DirectionForm.module.scss'

import { Button } from 'components/commonComponents/Button/Button'
import { DirectionType } from 'store/types/DirectionType'

type SectionFormPropsType = {
  setDirection: (direction: DirectionType) => void
  mode: 'add' | 'edit'
  directions?: DirectionType[]
}

export const DirectionForm: FC<SectionFormPropsType> = ({
  setDirection,
  mode,
  directions,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<DirectionType>({ mode: 'onChange' })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '' })
    }
  }, [isSubmitSuccessful, reset])

  const [authorName, setAuthorName] = useState<string>('')

  const onSubmit: SubmitHandler<DirectionType> = data => {
    setDirection(data)
  }
  const selectAuthorName = (event: ChangeEvent<HTMLSelectElement>): void => {
    directions?.forEach(author => {
      if (author.uuid === event.currentTarget.value) {
        setAuthorName(author.name)
      }
    })
  }

  const select =
    mode === 'edit' ? (
      <div>
        <label htmlFor="section">Разделы</label>
        <select id="section" {...register('uuid')} onChange={selectAuthorName}>
          {directions?.map(({ uuid, name }) => (
            <option key={uuid} value={uuid}>
              {name}
            </option>
          ))}
        </select>
      </div>
    ) : null

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <div>
        <label>Имя раздела</label>
        <input
          {...register('name', {
            maxLength: { value: 15, message: '15 символов максимум' },
            minLength: { value: 3, message: '3 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          defaultValue={authorName}
          placeholder="имя"
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>{select}</div>
      <Button name="отправить" type="submit" />
    </form>
  )
}
