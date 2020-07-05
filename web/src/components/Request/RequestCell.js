import Request from 'src/components/Request'
import LoadIndicator from 'src/components/LoadIndicator'

export const QUERY = gql`
  query FIND_REQUEST_BY_ID($id: String!) {
    request: request(id: $id) {
      id
      title
      description
      tags {
        name
      }
      user {
        id
        name
      }
      company {
        id
        company
        address
        city
      }
      createdAt
      companyId
      validUntil
      responses {
        id
        title
        description
        createdAt
        company {
          company
          address
          state
          city
          user {
            name
            phone
          }
        }
      }
    }
  }
`

export const Loading = () => <LoadIndicator />

export const Empty = () => <div>Request not found</div>

export const Success = ({ request }) => {
  return <Request request={request} />
}
