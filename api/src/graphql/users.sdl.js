import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String!
    phone: String!
    company: Company
  }

  type Query {
    users: [User!]!
    user(id: String!): User!
  }

  input CreateUserInput {
    id: String!
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
