import Request from 'src/components/Request'

export const QUERY = gql`
  query FIND_REQUEST_BY_ID($id: String!) {
    request: request(id: $id) {
      id
      title
      description
      createdAt
      createdById
      validUntil
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Request not found</div>

export const Success = ({ request }) => {
  return <Request request={request} />
}