import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RequestForm from 'src/components/RequestForm'
import { Text } from '@zeit-ui/react'

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
        console.log('created')
        //navigate(routes.requests())
        //addMessage('Request created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    console.log(input)
    createRequest({ variables: { input } })
  }

  return (
    <div>
      <header>
        <Text h2>Nova requisição</Text>
      </header>
      <RequestForm onSave={onSave} loading={loading} error={error} />
    </div>
  )
}

export default NewRequest
