import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import RequestForm from 'src/components/Request/RequestForm'

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
const UPDATE_REQUEST_MUTATION = gql`
  mutation UpdateRequestMutation($id: String!, $input: UpdateRequestInput!) {
    updateRequest(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ request }) => {
  const { addMessage } = useFlash()
  const [updateRequest, { loading, error }] = useMutation(
    UPDATE_REQUEST_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.requests())
        addMessage('Request updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateRequest({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Request {request.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RequestForm
          request={request}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
