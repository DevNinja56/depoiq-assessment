import { gql } from "@apollo/client"

export const GET_TOPICS = gql`
  query GetTopics {
    topics {
      id
      title
      description
    }
  }
`
