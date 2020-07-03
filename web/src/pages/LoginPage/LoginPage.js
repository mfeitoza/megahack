import { Input, Spacer, Button } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'

const LoginPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Login Page</h1>
        <form>
          <Input placeholder="diego@email.com.br" width="50%">
            Email
          </Input>
          <Spacer y={0.5} />
          <Input.Password placeholder="••••••••" width="50%">
            Senha
          </Input.Password>
          <Spacer y={0.5} />
          <Button type="success" auto>
            Entrar
          </Button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default LoginPage
