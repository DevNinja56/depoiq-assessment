import { gql } from "@apollo/client"

export const GET_TOPICS = gql`
  query GetTopics($page: Int, $limit: Int) {
    topics(page: $page, limit: $limit) {
      count
      data {
        id
        title
        description
      }
      currentPage
      nextPage
    }
  }
`
