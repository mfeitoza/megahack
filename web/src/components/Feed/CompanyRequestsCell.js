import { Link, routes } from '@redwoodjs/router'
import LoadIndicator from 'src/components/LoadIndicator'

import Requests from 'src/components/Request/Requests'

export const QUERY = gql`
  query COMPANY_REQUESTS_FEED {
    companyRequests {
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

export const Loading = () => <LoadIndicator />

export const Empty = () => {
  return <div className="rw-text-center">Você não tem requisição aberta</div>
}

export const Success = ({ companyRequests }) => {
  return <Requests requests={companyRequests} />
}
