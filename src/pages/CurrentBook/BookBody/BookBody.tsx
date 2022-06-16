import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './BookBody.module.scss'

import { Button, NavLinkComponent } from 'components'
import { BASE_IMAGE_URL } from 'constants/constants'
import { Path } from 'enums'
import { selectBook } from 'store/selectors/books'
import { convertTitle } from 'utils/convert_title'
import { setDownloadBookUrl } from 'utils/setDownloadBookUrl'

export const BookBody: FC = () => {
  const { title, author, description, image_url, edition_date, uuid } =
    useSelector(selectBook)

  return (
    <div className={style.container}>
      <img alt="" src={BASE_IMAGE_URL + image_url} />
      <div className={style.body}>
        <h3>{convertTitle(title)}</h3>
        <h4>{edition_date}</h4>
        <h5>{author.full_name}</h5>
        <div>
          <p>Описание</p>
          {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          consequuntur delectus dignissimos distinctio inventore possimus rem temporibus
          vitae? At consectetur error minima modi nam nihil saepe sequi ullam velit
          voluptatibus!
        </div>
        <div />
        <a href={setDownloadBookUrl(author.uuid, title, uuid)} download>
          <Button name="⇩ скачать" />
        </a>
        <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      </div>
    </div>
  )
}
