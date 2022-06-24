export type DifficultyType = 'senior' | 'middle' | 'junior'

export type LanguageType = 'rus' | 'eng'

export type BookPostBodyType = {
  title: string
  direction_uuid: string
  author_uuid: string
  difficulty: DifficultyType
  edition_date: string
  description: string
  language: LanguageType
  tags_uuids: string
}

export type BookPostFileType = {
  file: FileList
  image: any
}

export type BookPostType = BookPostBodyType & BookPostFileType
