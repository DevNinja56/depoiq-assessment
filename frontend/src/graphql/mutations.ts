import { gql } from "@apollo/client"

export const ADD_TOPIC = gql`
  mutation AddTopic($title: String!, $description: String!) {
    addTopic(title: $title, description: $description) {
      title
      description
    }
  }
`
