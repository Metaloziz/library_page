export type DifficultyType = 'hard' | 'middle' | 'low'

export type LanguageType = 'rus' | 'eng'

export type BookPostType = {
  file: File
  title: string
  direction_uuid: string
  author_uuid: string
  difficulty: DifficultyType
  edition_date: string
  description: string
  language: LanguageType
  tags_uuids: string
  image: File
}
