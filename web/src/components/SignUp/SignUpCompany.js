import { useMutation } from '@redwoodjs/web'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { Text } from '@zeit-ui/react'

import CompanyForm from 'src/components/SignUpForm/CompanyForm'
import { useAuth } from 'src/auth/useAuth'

const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompanyMutation(
    $userId: String!
    $input: CreateCompanyInput!
  ) {
    createCompanyWithUser(userId: $userId, input: $input) {
      id
    }
  }
`

const SignupPage = () => {
  const { signIn, userMetadata } = useAuth()
  const { id } = useParams()
  const [createCompany, { loading, error }] = useMutation(
    CREATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        console.log('created')
        navigate(routes.home())
      },
    }
  )

  const onSave = async (data) => {
    console.log(id, data)
    createCompany({ variables: { userId: id, input: data } })
  }

  return (
    <>
      <Text h2>Empresa</Text>
      <CompanyForm onSave={onSave} />
    </>
  )
}

export default SignupPage
