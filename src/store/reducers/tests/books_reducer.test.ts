import { booksReducer, setCurrentBookAC } from 'store/reducers/books_reducer'
import { getBooksTC } from 'store/thunks/books_thunks'
import { BooksInitialStateType } from 'store/types/BooksInitialStateType'
import { BookType } from 'store/types/BookType'

let initialState: BooksInitialStateType
let newBooks: BookType[]
const bookId: string = '1'

beforeEach(() => {
  initialState = {
    books: [],
    currentBook: {
      uuid: '1',
      title: 'software testing',
      direction: {
        uuid: '40',
        name: 'SAGA',
      },
      author: {
        uuid: '1',
        full_name: 'BOB',
      },
      difficulty: 'middle',
      edition_date: '2022-06-07T00:00:00Z',
      description: 'very usefull ',
      local_url: '/file/book?file=author(1)-title(software_testing).pdf&uuid=1',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
      image_url: '/image/book?format=QVGA&uuid=1',
    },
  }

  newBooks = [
    {
      uuid: '1',
      title: 'software testing',
      direction: {
        uuid: '40',
        name: 'SAGA',
      },
      author: {
        uuid: '1',
        full_name: 'BOB',
      },
      difficulty: 'middle',
      edition_date: '2022-06-07T00:00:00Z',
      description: 'very usefull ',
      local_url: '/file/book?file=author(1)-title(software_testing).pdf&uuid=1',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
      image_url: '/image/book?format=QVGA&uuid=1',
    },
    {
      uuid: '2',
      title: 'software testing',
      direction: {
        uuid: '40',
        name: 'SAGA',
      },
      author: {
        uuid: '1',
        full_name: 'BOB',
      },
      difficulty: 'middle',
      edition_date: '2022-06-07T00:00:00Z',
      description: 'very usefull ',
      local_url: '/file/book?file=author(1)-title(software_testing).pdf&uuid=2',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
      image_url: '/image/book?format=QVGA&uuid=2',
    },
  ]
})

describe('books reducer', () => {
  test('should set books', () => {
    const action = getBooksTC.fulfilled(newBooks, '')

    const endState = booksReducer(initialState, action)

    expect(endState.books).toStrictEqual(newBooks)
  })

  test('should set current book', () => {
    const action = setCurrentBookAC(bookId)

    const endState = booksReducer(initialState, action)

    expect(endState.books).toStrictEqual(newBooks)
  })
})
