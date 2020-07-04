import { Link, routes } from '@redwoodjs/router'
import { Grid } from '@zeit-ui/react'

import Requests from 'src/components/Request/Requests'

export const QUERY = gql`
  query REQUESTS {
    requests {
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
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No requests yet. '}
      <Link to={routes.newRequest()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ requests }) => {
  return <Requests requests={requests} />
}
