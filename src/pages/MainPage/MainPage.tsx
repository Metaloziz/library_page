import { FC } from 'react'

import style from './MainPage.module.scss'

import { Footer, MobileNavigation } from 'components'
import { Header } from 'components/Header'
import { PreviewContainer } from 'components/PreviewContainer/PreviewContainer'

const MainPage: FC = () => (
  <div className={style.container}>
    <MobileNavigation />
    <Header />
    <PreviewContainer />
    <Footer />
  </div>
)
export default MainPage
