import { gql } from "@apollo/client"

export const ADD_TOPIC = gql`
  mutation AddTopic($title: String!, $description: String!, $page: Int!, $limit: Int!) {
    addTopic(title: $title, description: $description, page: $page, limit: $limit) {
      title
      description
    }
  }
`
