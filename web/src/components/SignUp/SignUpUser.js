import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { Text } from '@zeit-ui/react'

import UserForm from 'src/components/SignUpForm/UserForm'
import { useAuth } from 'src/auth/useAuth'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const SignupPage = (props) => {
  const { signIn, userMetadata } = useAuth()
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: ({ createUser }) => {
      navigate(routes.newCompany({ id: createUser.id }))
    },
  })

  const onSave = async ({ name, email, phone, password }) => {
    try {
      await signIn({ email, password })
      createUser({
        variables: {
          input: {
            name,
            phone,
            email,
          },
        },
      })
    } catch (e) {
      console.log('error')
    }
  }

  return (
    <>
      <Text h2>Usuário</Text>
      <UserForm onSave={onSave} />
    </>
  )
}

export default SignupPage
