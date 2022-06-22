import { ChangeEvent, FC, useEffect, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/commonComponents/Button/Button'
import style from 'pages/CreationPage/EditTag/TagForm/TagForm.module.scss'
import { TagType } from 'store/types/TagType'

type TagFormPropsType = {
  setTag: (tag: TagType) => void
  mode: 'add' | 'edit'
  tags?: TagType[]
}

export const TagForm: FC<TagFormPropsType> = ({ setTag, mode, tags }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<TagType>({ mode: 'onChange' })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '' })
    }
  }, [isSubmitSuccessful])

  const [tagName, setTagName] = useState<string>('')

  const onSubmit: SubmitHandler<TagType> = data => {
    setTag(data)
  }

  const selectAuthorName = (event: ChangeEvent<HTMLSelectElement>): void => {
    tags?.forEach(({ uuid, name }) => {
      if (uuid === event.currentTarget.value) {
        setTagName(name)
      }
    })
  }

  const select =
    mode === 'edit' ? (
      <div>
        <label htmlFor="section">Теги</label>
        <select id="section" {...register('uuid')} onChange={selectAuthorName}>
          {tags?.map(({ uuid, name }) => (
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
        <label>Имя тега</label>
        <input
          {...register('name', {
            maxLength: { value: 15, message: '15 символов максимум' },
            minLength: { value: 3, message: '3 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          defaultValue={tagName}
          placeholder="имя"
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>{select}</div>
      <Button name="отправить" type="submit" />
    </form>
  )
}
