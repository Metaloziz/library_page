export enum Path {
  DEFAULT = '/',
  MAIN = '/main',
}

export enum RequestSource {
  DIRECTIONS = '/directions',
  AUTHORS = '/authors',
  TAGS = '/tags',
  BOOKS = '/books',
}

export enum RequestCommonData {
  COURSE = 'course/',
  CONTACT = 'contact/',
}

export enum StatusCode {
  GET_DIRECTIONS_SUCCESS = 200,
  GET_AUTHORS_SUCCESS = 200,
  GET_TAGS_SUCCESS = 200,

  GET_COURSES_SUCCESS = 200,
  GET_CONTACTS_SUCCESS = 200,
}

export enum DeBounceTimer {
  SEARCH_DELAY = 1500,
  CLOSE_ERROR = 3000,
}
