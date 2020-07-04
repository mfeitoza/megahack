import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { Text } from '@zeit-ui/react'

import ResponseForm from './ResponseForm'

const CREATE_RESPONSE_MUTATION = gql`
  mutation CreateResponseMutation(
    $requestId: String!
    $input: CreateResponseInput!
  ) {
    createResponse(requestId: $requestId, input: $input) {
      id
    }
  }
`

const NewRequest = () => {
  const { id } = useParams()
  const [createResponse, { loading, error }] = useMutation(
    CREATE_RESPONSE_MUTATION,
    {
      onCompleted: () => {
        console.log('created')
        //navigate(routes.requests())
        //addMessage('Request created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    console.log(input)
    createResponse({ variables: { requestId: id, input } })
  }

  return (
    <div>
      <header>
        <Text h2>Resposta</Text>
      </header>
      <ResponseForm onSave={onSave} loading={loading} error={error} />
    </div>
  )
}

export default NewRequest
