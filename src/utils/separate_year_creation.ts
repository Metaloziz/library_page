export const separateYearCreation = (date: string): string => {
  const BEGIN_YEAR = 0
  const END_YEAR = 4

  return date.slice(BEGIN_YEAR, END_YEAR)
}
