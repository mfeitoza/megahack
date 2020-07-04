import gql from 'graphql-tag'

export const schema = gql`
  type Response {
    id: String!
    title: String!
    description: String!
    createdAt: DateTime!
    company: Company!
    companyId: String!
    ReponsesToRequest: [ReponsesToRequest]
  }

  type Query {
    responses: [Response!]!
    response(id: String!): Response!
  }

  input CreateResponseInput {
    title: String!
    description: String!
    companyId: String
    requestId: String
  }

  input UpdateResponseInput {
    title: String
    description: String
    companyId: String
  }

  type Mutation {
    createResponse(requestId: String!, input: CreateResponseInput!): Response!
    updateResponse(id: String!, input: UpdateResponseInput!): Response!
    deleteResponse(id: String!): Response!
  }
`
