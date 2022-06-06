import { FC } from 'react'

import style from './MainPage.module.scss'

import { Footer, MobileNavigation, NavigationContainer } from 'components'
import { Header } from 'components/Header'

const MainPage: FC = () => (
  <div className={style.container}>
    <MobileNavigation />
    <Header />
    <NavigationContainer />
    <Footer />
  </div>
)
export default MainPage
