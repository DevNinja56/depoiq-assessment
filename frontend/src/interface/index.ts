export interface GetTopicsQuery {
  topics: Topic[]
}

export interface Topic {
  id: string
  title: string
  description: string
}
