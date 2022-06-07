export type ContentNameType = 'isBooks' | 'isArticle' | 'isVideo'

export type ActionPayloadType = {
  name: ContentNameType
  value: boolean
}

export type ContentType = {
  [key in ContentNameType]: boolean
}
