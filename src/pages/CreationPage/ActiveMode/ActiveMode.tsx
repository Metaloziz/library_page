import { FC } from 'react'

import { EditAuthor } from 'pages/CreationPage/EditAuthor/EditAuthor'
import { EditDirection } from 'pages/CreationPage/EditDirection/EditDirection'

export type CreationPageModeType = 'direction' | 'author'
export const ActiveMode: FC<{ mode: CreationPageModeType }> = ({ mode }) => {
  switch (mode) {
    case 'direction':
      return <EditDirection />
    case 'author':
      return <EditAuthor />
    default:
      return <EditDirection />
  }
}
