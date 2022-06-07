import { RootState } from 'store/store'
import { ContactsType } from 'store/types/ContactsType'
import { CoursesType } from 'store/types/CoursesType'

export const selectErrorMessage = (state: RootState): string => state.app.errorMessage
export const selectIsError = (state: RootState): boolean => state.app.isError

export const selectIsAdminMode = (state: RootState): boolean => state.app.isAdmin
export const selectIsCourses = (state: RootState): CoursesType[] => state.app.courses
export const selectContacts = (state: RootState): ContactsType => state.app.contacts
export const selectIsLoading = (state: RootState): boolean => state.app.isLoading
