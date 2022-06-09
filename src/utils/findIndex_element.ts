export const findIndexElement = (array: any[], elementId: number): number =>
  array.findIndex(el => el.id === elementId)

type ObjectType = {
  uuid: string
}
export const findElement = <T>(array: (T & ObjectType)[], elementId: string): T =>
  array.find(({ uuid }) => uuid === elementId)!
