import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String!
    phone: String!
    company: Company
    request: [Request]
  }

  type Query {
    users: [User!]!
    user(id: String!): User!
    findUserByEmail(email: String!): User!
  }

  input CreateUserInput {
    email: String!
    name: String!
    phone: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    phone: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
