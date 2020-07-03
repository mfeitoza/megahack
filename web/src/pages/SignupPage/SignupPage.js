import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Progress, Text } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'

import UserForm from 'src/components/SignUpForm/UserForm'

const SignupPage = () => {
  return (
    <DefaultLayout>
      <Text h1>Cadastro</Text>
      <Progress type="success" value={50} />
      <UserForm />
    </DefaultLayout>
  )
}

export default SignupPage
