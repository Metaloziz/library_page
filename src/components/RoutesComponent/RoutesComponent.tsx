import { FC, lazy, Suspense } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { PageLoader, ProtectedRoute } from 'components/commonComponents'
import { Path } from 'enums'
import CurrentBook from 'pages/CurrentBook/CurrentBook'

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))

const Component404 = lazy(() => import('../commonComponents/Component404/Component404'))

export const RoutesComponent: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path={Path.DEFAULT} element={<Navigate to={Path.MAIN} />} />
      <Route path={Path.MAIN} element={<MainPage />} />
      <Route path={Path.CURRENT_BOOK} element={<CurrentBook />} />
      <Route element={<ProtectedRoute redirectPath={Path.MAIN} />} />
      <Route path="*" element={<Component404 />} />
    </Routes>
  </Suspense>
)
