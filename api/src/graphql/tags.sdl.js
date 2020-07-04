import gql from 'graphql-tag'

export const schema = gql`
  type Tag {
    name: String!
  }

  type Query {
    tags: [Tag!]!
    tag(name: String!): Tag!
  }

  input CreateTagInput {
    name: String!
  }

  input UpdateTagInput {
    name: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(name: String!, input: UpdateTagInput!): Tag!
    deleteTag(name: String!): Tag!
  }
`
