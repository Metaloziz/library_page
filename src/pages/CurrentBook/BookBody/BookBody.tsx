import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './BookBody.module.scss'

import { Button } from 'components'
import { BASE_URL } from 'constants/constants'
import { selectBook } from 'store/selectors/books'

export const BookBody: FC = () => {
  const { title, author, description, image_url, edition_date } = useSelector(selectBook)

  return (
    <div className={style.container}>
      <img alt="" src={BASE_URL + image_url} />
      <div className={style.body}>
        <h3>{title}</h3>
        <h4>{author.full_name}</h4>
        <h4>{edition_date}</h4>
        <div>
          {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          consequuntur delectus dignissimos distinctio inventore possimus rem temporibus
          vitae? At consectetur error minima modi nam nihil saepe sequi ullam velit
          voluptatibus!
        </div>
        <Button name="скачать" />
      </div>
    </div>
  )
}
