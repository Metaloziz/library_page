export type VideoType = {
  uuid: string
  title: string
  direction: {
    uuid: string
    name: string
  }
  difficulty: string
  local_url: string
  language: string
  tags: [
    {
      uuid: string
      name: string
    },
    {
      uuid: string
      name: string
    },
  ]
}
