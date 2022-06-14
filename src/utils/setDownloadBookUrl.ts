export const setDownloadBookUrl = (
  authorId: string,
  titleBook: string,
  bookId: string,
): string =>
  `http://localhost:1000/file/book?file=author(${authorId})-title(${titleBook}).pdf&uuid=${bookId}`
