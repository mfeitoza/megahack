import gql from 'graphql-tag'

export const schema = gql`
  type Tag {
    id: Int!
    name: String!
  }

  type Query {
    tags: [Tag!]!
    tag(id: Int!): Tag!
  }

  input CreateTagInput {
    name: String!
  }

  input UpdateTagInput {
    name: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(id: Int!, input: UpdateTagInput!): Tag!
    deleteTag(id: Int!): Tag!
  }
`
