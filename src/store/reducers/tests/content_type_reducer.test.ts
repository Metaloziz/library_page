import {
  contentTypeReducer,
  setAllContentTypeAC,
  setContentTypeAC,
} from 'store/reducers/content_types_reducer'
import { ContentType } from 'store/types/ContentType'

let contentTypeInitialState: ContentType

beforeEach(() => {
  contentTypeInitialState = {
    isArticle: false,
    isBooks: false,
    isVideo: false,
  }
})

describe('content type reducer', () => {
  test('should set content type', () => {
    const action = setContentTypeAC({ name: 'isArticle', value: true })

    const endState = contentTypeReducer(contentTypeInitialState, action)

    expect(endState.isArticle).toBeTruthy()
  })

  test('should all content type true|false', () => {
    const action = setAllContentTypeAC()

    const endState = contentTypeReducer(contentTypeInitialState, action)

    expect(endState.isVideo).toBeTruthy()
  })
})
