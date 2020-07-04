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

const SignupPage = () => {
  const { signIn, userMetadata } = useAuth()
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      console.log('created')
    },
  })

  const onSave = async ({ name, email, phone, password }) => {
    try {
      await signIn({ email, password })
      createUser({
        variables: {
          input: {
            id: userMetadata.uid,
            name,
            phone,
            email,
          },
        },
      })
      navigate(routes.newCompany({ id: userMetadata.uid }))
    } catch (e) {
      console.log(e)
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
