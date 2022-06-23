import { FC } from 'react'

import { EditAuthor } from 'pages/CreationPage/EditAuthor/EditAuthor'
import { EditBook } from 'pages/CreationPage/EditBook/EditBook'
import { EditDirection } from 'pages/CreationPage/EditDirection/EditDirection'
import { EditTag } from 'pages/CreationPage/EditTag/EditTag'

export type CreationPageModeType = 'direction' | 'author' | 'tag' | 'book'

export const ActiveMode: FC<{ mode: CreationPageModeType }> = ({ mode }) => {
  switch (mode) {
    case 'direction':
      return <EditDirection />
    case 'author':
      return <EditAuthor />
    case 'tag':
      return <EditTag />
    case 'book':
      return <EditBook />
    default:
      return <EditDirection />
  }
}
