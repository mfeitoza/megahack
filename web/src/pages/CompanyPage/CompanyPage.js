import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from '@redwoodjs/router'
import { Progress, Text } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'

import CompanyForm from 'src/components/SignUpForm/CompanyForm'

const SignupPage = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <DefaultLayout>
      <Text h1>Cadastro</Text>
      <Progress type="success" value={100} />
      <CompanyForm />
    </DefaultLayout>
  )
}

export default SignupPage
