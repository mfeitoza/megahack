import gql from 'graphql-tag'

export const schema = gql`
  type Company {
    id: String!
    company: String!
    zipCode: String!
    address: String!
    state: String!
    city: String!
    user: User!
    userId: String!
    request: [Request!]!
  }

  type Query {
    companies: [Company!]!
    company(id: String!): Company!
  }

  input CreateCompanyInput {
    company: String!
    zipCode: String!
    address: String!
    state: String!
    city: String!
    userId: String!
  }

  input UpdateCompanyInput {
    company: String
    zipCode: String
    address: String
    state: String
    city: String
    userId: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company!
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
    deleteCompany(id: String!): Company!
  }
`
