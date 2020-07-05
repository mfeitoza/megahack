import LoadIndicator from 'src/components/LoadIndicator'
import { Note } from '@zeit-ui/react'

import Requests from 'src/components/Request/Requests'

export const QUERY = gql`
  query ACTIVE_REQUESTS_FEED {
    allActiveRequest {
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
  return (
    <Note label="sem oportunidades" filled>
      Mas notificaremos vc caso surja alguma!
    </Note>
  )
}

export const Success = ({ allActiveRequest }) => {
  return <Requests requests={allActiveRequest} action="response" />
}
