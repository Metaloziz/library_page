type ObjectType = {
  uuid: string
}

type ObjectTypeNew = {
  uuid: number
}
export const convertIdType = <T>(array: (T & ObjectType)[]): (T & ObjectTypeNew)[] =>
  array.map(directionItem => ({
    ...directionItem,
    uuid: Number(directionItem.uuid),
  }))
