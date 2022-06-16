import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/commonComponents/Button/Button'
import style from 'pages/CreationPage/NewAuthorForm/NewAuthorForm.module.scss'
import { AuthorNameType } from 'store/types/AuthorNameType'
import { AuthorType } from 'store/types/AuthorType'

type SectionFormPropsType = {
  setSectionData: (data: AuthorNameType) => void
  mode: 'add' | 'edit'
  sections?: AuthorType[]
}

export const NewAuthorForm: FC<SectionFormPropsType> = ({
  setSectionData,
  mode,
  sections,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<AuthorType, 'full_name'>>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<AuthorNameType> = data => {
    setSectionData(data)
  }

  const select =
    mode === 'edit' ? (
      <div>
        <label htmlFor="section">Автор</label>
        <select id="section" defaultValue={1} {...register('full_name')}>
          {sections?.map(({ uuid, full_name }) => (
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
          placeholder="имя"
        />
        <p>{errors.full_name?.message}</p>
      </div>
      {select}
      <Button name="отправить" type="submit" />
    </form>
  )
}
