import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { DirectionNameType } from 'store/types/DirectionNameType'
import { DirectionType } from 'store/types/DirectionType'
import { EditElementResponseType } from 'store/types/EditElementResponseType'

export const directionsAPI = {
  getDirections: () => instance.get<DirectionType[]>(RequestSource.DIRECTIONS),

  getDirection: (directionId: string) =>
    instance.get<DirectionType>(`${RequestSource.DIRECTION}/${directionId}`),

  postDirection: (directionName: DirectionNameType) =>
    instance.post<EditElementResponseType>(RequestSource.DIRECTION, directionName),

  updateDirection: (direction: DirectionType) =>
    instance.put<EditElementResponseType>(RequestSource.DIRECTION, direction),

  deleteDirection: (directionId: string) =>
    instance.delete<EditElementResponseType>(`${RequestSource.DIRECTION}/${directionId}`),
}
