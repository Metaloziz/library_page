import { instance } from 'api/instance'
import { DirectionType } from 'components/NavigationContainer/DirectionNavigation/NavigationSelect'
import { RequestSource } from 'enums/enums'

export const directionsAPI = {
  getDirections: () => instance.get<DirectionType[]>(`${RequestSource.DIRECTIONS}`),
}
