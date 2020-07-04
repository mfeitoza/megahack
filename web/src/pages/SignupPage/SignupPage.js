import { Progress, Text } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'

import SignUpUser from 'src/components/SignUp/SignUpUser'

const SignupPage = () => {
  return (
    <DefaultLayout>
      <Text h1>Cadastro</Text>
      <Progress type="success" value={50} />
      <SignUpUser />
    </DefaultLayout>
  )
}

export default SignupPage
