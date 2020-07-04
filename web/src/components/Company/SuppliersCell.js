import { Link, routes } from '@redwoodjs/router'
import LoadIndicator from 'src/components/LoadIndicator'

import Suppliers from './Suppliers'

export const QUERY = gql`
  query SUPPLIERS {
    suppliers {
      id
      company
      address
      state
      city
      isSupplier
      user {
        name
        phone
      }
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <LoadIndicator />

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

export const Success = ({ suppliers }) => {
  return <Suppliers suppliers={suppliers} />
}
