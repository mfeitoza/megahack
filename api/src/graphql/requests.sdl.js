import gql from 'graphql-tag'

export const schema = gql`
  type Request {
    id: String!
    title: String!
    description: String!
    tags: [Tag]
    createdAt: DateTime!
    createdBy: User!
    createdById: String!
    validUntil: DateTime!
  }

  type Query {
    requests: [Request!]!
    request(id: String!): Request!
  }

  input CreateRequestInput {
    title: String!
    description: String!
    createdById: String!
    validUntil: DateTime!
  }

  input UpdateRequestInput {
    title: String
    description: String
    createdById: String
    validUntil: DateTime
  }

  type Mutation {
    createRequest(input: CreateRequestInput!): Request!
    updateRequest(id: String!, input: UpdateRequestInput!): Request!
    deleteRequest(id: String!): Request!
  }
`
