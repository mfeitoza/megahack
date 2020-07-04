import gql from 'graphql-tag'

export const schema = gql`
  type ReponsesToRequest {
    id: String!
    request: Request!
    requestId: String!
    response: Response!
    responseId: String!
    selected: Boolean!
    status: String!
  }

  type Query {
    reponsesToRequests: [ReponsesToRequest!]!
  }

  input CreateReponsesToRequestInput {
    requestId: String!
    responseId: String!
    selected: Boolean!
    status: String!
  }

  input UpdateReponsesToRequestInput {
    requestId: String
    responseId: String
    selected: Boolean
    status: String
  }
`
