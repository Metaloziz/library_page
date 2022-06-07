import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { DirectionType } from 'store/types/DirectionType'

export const directionsAPI = {
  getDirections: () => instance.get<DirectionType[]>(`${RequestSource.DIRECTIONS}`),
}
