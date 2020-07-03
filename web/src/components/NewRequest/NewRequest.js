import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RequestForm from 'src/components/RequestForm'

const CREATE_REQUEST_MUTATION = gql`
  mutation CreateRequestMutation($input: CreateRequestInput!) {
    createRequest(input: $input) {
      id
    }
  }
`

const NewRequest = () => {
  const { addMessage } = useFlash()
  const [createRequest, { loading, error }] = useMutation(
    CREATE_REQUEST_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.requests())
        addMessage('Request created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createRequest({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Request</h2>
      </header>
      <div className="rw-segment-main">
        <RequestForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRequest
