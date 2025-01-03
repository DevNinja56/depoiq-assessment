export interface GetTopicsQuery {
  topics: {
    count: number
    data: Topic[]
    currentPage: number
    nextPage: number | null
  }
}

export interface Topic {
  id: string
  title: string
  description: string
}
