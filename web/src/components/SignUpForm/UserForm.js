import { Input, Spacer, Text, Button } from '@zeit-ui/react'
import { useForm } from 'react-hook-form'

const SignupPage = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Text h2>Usuário</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" placeholder="Email" width="100%" ref={register}>
          Email
        </Input>
        <Spacer y={0.5} />

        <Input.Password
          name="password"
          placeholder="•••••••"
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
