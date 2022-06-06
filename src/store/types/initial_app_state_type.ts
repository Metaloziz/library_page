import { ContactsType } from './contacts_type'
import { CoursesType } from './courses_type'

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
  isAdmin: boolean
  courses: CoursesType[]
  contacts: ContactsType
  isLoading: boolean
}
