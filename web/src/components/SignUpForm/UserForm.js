import { Input, Spacer, Button } from '@zeit-ui/react'
import { useForm } from 'react-hook-form'

const SignupPage = ({ onSave }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    onSave(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Nome"
          initialValue="Marcus Feitoza"
          width="100%"
          ref={register}
        >
          Nome
        </Input>
        <Spacer y={0.5} />

        <Input
          name="phone"
          placeholder="Nome"
          initialValue="22981595548"
          width="100%"
          ref={register}
        >
          Celular
        </Input>
        <Spacer y={0.5} />

        <Input
          name="email"
          placeholder="Email"
          initialValue="sir-markus@live.com"
          width="100%"
          ref={register}
        >
          Email
        </Input>
        <Spacer y={0.5} />

        <Input.Password
          name="password"
          placeholder="•••••••"
          initialValue="30435192"
          width="100%"
          ref={register}
        >
          Senha
        </Input.Password>
        <Spacer y={0.5} />
        <Button type="success" htmlType="submit">
          Cadastrar
        </Button>
      </form>
    </>
  )
}

export default SignupPage
