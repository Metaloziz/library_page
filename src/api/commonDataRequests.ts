import { instanceCommonData } from 'api/instance'
import { RequestCommonData } from 'enums/enums'
import { ContactsType } from 'store/types/ContactsType'
import { CoursesType } from 'store/types/CoursesType'

export const commonDataRequests = {
  getCourses: () => instanceCommonData.get<CoursesType[]>(`${RequestCommonData.COURSE}`),

  getContacts: () =>
    instanceCommonData.get<ContactsType[]>(`${RequestCommonData.CONTACT}`),
}
