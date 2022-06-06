import { FC } from 'react'

import style from './Header.module.scss'

import image from 'assets/images/mainPage/Library_main_page_image.svg'

export const Header: FC = () => (
  <div className={style.container}>
    <div className={style.preview}>
      <h1>Книги из мира IT</h1>
      <h3>Мы собрали для тебя интересные КНИГИ IT-индустрии</h3>
      <div className={style.text}>
        Учебная литература является основой информационного обеспечения в процессе
        образования. Благодаря подобного рода литературе мы черпаем знания относительно
        конкретного предмета изучения, таким образом она служит средством обучения. Без
        книг не было бы ни образования, ни культуры.
      </div>
    </div>
    <img src={image} className={style.image} alt="header" />
  </div>
)
