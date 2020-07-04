import { Progress, Text } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'

import SignUpCompany from 'src/components/SignUp/SignUpCompany'

const SignupPage = () => {
  return (
    <DefaultLayout>
      <Text h1>Cadastro</Text>
      <Progress type="success" value={100} />
      <SignUpCompany />
    </DefaultLayout>
  )
}

export default SignupPage
