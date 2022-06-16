export enum Path {
  DEFAULT = '/',
  MAIN = '/main',
  CURRENT_BOOK = '/current_book',
  CURRENT_ARTICLE = '/current_article',
  CURRENT_VIDEO = '/current_video',
  CREATION_PAGE = '/creation_page',
}

export enum RequestSource {
  DIRECTIONS = '/directions',
  AUTHORS = '/authors',
  AUTHOR = '/author',
  TAGS = '/tags',
  BOOKS = '/books',
  VIDEO = '/videos',
  ARTICLES = '/articles',
}

export enum RequestCommonData {
  COURSE = 'course/',
  CONTACT = 'contact/',
}

export enum StatusCode {
  GET_DIRECTIONS_SUCCESS = 200,
  GET_AUTHORS_SUCCESS = 200,
  GET_AUTHOR_SUCCESS = 200,
  GET_TAGS_SUCCESS = 200,
  GET_VIDEOS_SUCCESS = 200,
  GET_ARTICLES_SUCCESS = 200,

  GET_COURSES_SUCCESS = 200,
  GET_CONTACTS_SUCCESS = 200,

  POST_AUTHOR_SUCCESS = 201,
}

export enum DeBounceTimer {
  SEARCH_DELAY = 1500,
  CLOSE_ERROR = 3000,
}

export enum ImageSize {
  ORIGINAL = 'original',
  LARGE = 'HD720',
  MIDDLE = 'VGA',
  SMALL = 'QVGA',
}
