import { gql } from "@apollo/client"

export const ADD_TOPIC = gql`
  mutation AddTopic($title: String!, $page: Int!, $limit: Int!) {
    addTopic(title: $title, page: $page, limit: $limit) {
      title
    }
  }
`
