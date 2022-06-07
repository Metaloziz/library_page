export enum ButtonsPagination {
  Zero,
  One,
  Two,
  Three,
  Four,
}

export enum Path {
  DEFAULT = '/',
  MAIN = '/main',
  CURRENT_NEWS = '/current_news',
  CREATE_NEWS = '/create_news',
  CHANGE_NEWS = '/change_news',
  CREATE_SECTION = '/create_section',
}

export enum RequestSource {
  DIRECTIONS = '/directions',
  AUTHORS = '/authors',
  TAGS = '/tags',
  SEARCH = 'search',
  POPULAR = 'popular',
}

export enum RequestCommonData {
  COURSE = 'course/',
  CONTACT = 'contact/',
}

export enum StatusCode {
  GET_DIRECTIONS_SUCCESS = 200,
  GET_AUTHORS_SUCCESS = 200,
  GET_TAGS_SUCCESS = 200,
  SUCCESS = 204,
  POST_NEWS_SUCCESS = 201,
  GET_COURSES_SUCCESS = 200,
  GET_CONTACTS_SUCCESS = 200,
  UPDATE_NEWS_SUCCESS = 204,
}

export enum DeBounceTimer {
  SEARCH_DELAY = 1500,
  CLOSE_ERROR = 3000,
}

export enum Error {
  EMPTY_NEWS = 'нету новостей',
  PROTECT_SECTION = 'нельзя редактировтаь',
}
