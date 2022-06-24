import { instance } from 'api/instance'
import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { RequestSource } from 'enums/enums'
import { BookPostType } from 'store/types/BookPostType'
import { BookType } from 'store/types/BookType'
import { EditElementResponseType } from 'store/types/EditElementResponseType'

export const booksAPI = {
  getBooks: () => instance.get<BookType[]>(RequestSource.BOOKS),

  postBook: ({
    title,
    tags_uuids,
    direction_uuid,
    description,
    language,
    file,
    difficulty,
    author_uuid,
    edition_date,
    image,
  }: BookPostType) => {
    const formDataObject = new FormData()

    formDataObject.append('title', title) // todo как упростить ?
    formDataObject.append('direction_uuid', direction_uuid)
    formDataObject.append('author_uuid', author_uuid)
    formDataObject.append('difficulty', difficulty)
    formDataObject.append('edition_date', edition_date)
    formDataObject.append('description', description)
    formDataObject.append('language', language)
    formDataObject.append('tags_uuids', tags_uuids)

    formDataObject.append('file', file[FIRST_ARRAY_ITEM])
    formDataObject.append('image', image[FIRST_ARRAY_ITEM])

    return instance.post<EditElementResponseType>(RequestSource.BOOK, formDataObject)
  },
}
