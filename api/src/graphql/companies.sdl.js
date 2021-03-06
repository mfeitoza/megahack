import gql from 'graphql-tag'

export const schema = gql`
  type Company {
    id: String!
    company: String!
    isSupplier: Boolean
    zipCode: String!
    address: String!
    state: String!
    city: String!
    user: User!
    userId: String!
    request: [Request!]
    response: [Response!]
  }

  type Query {
    companies: [Company!]!
    suppliers: [Company!]!
    companyRequests: [Request!]!
    company(id: String!): Company!
  }

  input CreateCompanyInput {
    company: String!
    isSupplier: Boolean
    zipCode: String!
    address: String!
    state: String!
    city: String!
    userId: String
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
    createCompanyWithUser(userId: String!, input: CreateCompanyInput!): Company!
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
    deleteCompany(id: String!): Company!
  }
`
