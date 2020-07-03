import { Input, Radio, Spacer, Button } from '@zeit-ui/react'
import DefaultLayout from 'src/layouts/DefaultLayout'

const SignupPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Cadastro</h1>
        <form>
          <Input name="company" placeholder="Nome fantasia" width="50%">
            Empresa
          </Input>
          <Spacer y={0.5} />

          <Input name="name" placeholder="Nome e sobrenome" width="50%">
            Nome
          </Input>
          <Spacer y={0.5} />

          <Input name="zipCode" placeholder="Informe seu CEP" width="50%">
            CEP
          </Input>
          <Spacer y={0.5} />

          <Input name="address" placeholder="Rua, Avenida, ..." width="50%">
            Endereço
          </Input>
          <Spacer y={0.5} />

          <Input name="state" placeholder="Estado" width="50%">
            Estado
          </Input>
          <Spacer y={0.5} />

          <Input name="city" placeholder="Cidade" width="50%">
            Cidade
          </Input>
          <Spacer y={0.5} />

          <Radio.Group useRow>
            <Radio value="customer">Cliente</Radio>
            <Radio value="supplier">Fornecedor</Radio>
          </Radio.Group>
          <Spacer y={0.5} />

          <Button type="success" auto>
            Cadastrar
          </Button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default SignupPage
