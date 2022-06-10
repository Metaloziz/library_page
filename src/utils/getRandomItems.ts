export const getRandomItems = <T>(arr: T[], itemsCount: number): T[] => {
  const deleteCount = 1
  const firstArrayItem = 0

  const copyItems = [...arr]

  if (itemsCount > copyItems.length)
    throw new RangeError('getRandom: more elements taken than available')

  const draftArray = []

  for (let i = 0; i < itemsCount; i++) {
    const randomIndexElement = Math.floor(copyItems.length * Math.random())
    draftArray.push(copyItems.splice(randomIndexElement, deleteCount)[firstArrayItem])
  }

  return draftArray
}
