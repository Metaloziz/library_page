import { ContactsType } from 'store/types/ContactsType'
import { CoursesType } from 'store/types/CoursesType'

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
  isAdmin: boolean
  courses: CoursesType[]
  contacts: ContactsType
  isLoading: boolean
}
