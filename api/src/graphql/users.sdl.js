import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String!
    company: String!
    zipCode: String!
    address: String!
    state: String!
    city: String!
  }

  type Query {
    users: [User!]!
    user(id: String!): User!
  }

  input CreateUserInput {
    email: String!
    name: String!
    company: String!
    zipCode: String!
    address: String!
    state: String!
    city: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    company: String
    zipCode: String
    address: String
    state: String
    city: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
