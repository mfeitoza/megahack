import { Input, Spacer, Button } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { useForm } from 'react-hook-form'

import { useAuth } from 'src/auth/useAuth'

const LoginPage = () => {
  const { register, handleSubmit, watch, errors } = useForm()

  const { logIn } = useAuth()
  const onSubmit = ({ email, password }) => {
    logIn({ email, password })
  }

  return (
    <DefaultLayout>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            placeholder="diego@email.com.br"
            width="100%"
            initialValue="sir-markus@live.com"
            ref={register}
          >
            Email
          </Input>
          <Spacer y={0.5} />
          <Input.Password
            name="password"
            placeholder="••••••••"
            initialValue="123456"
            width="100%"
            ref={register}
          >
            Senha
          </Input.Password>
          <Spacer y={0.5} />
          <Button type="success" width="100%" htmlType="submit">
            Entrar
          </Button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default LoginPage
