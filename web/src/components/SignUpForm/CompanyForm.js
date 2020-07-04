import { useEffect } from 'react'
import { Input, Text, Spacer, Button } from '@zeit-ui/react'
import { useForm, Controller } from 'react-hook-form'
import msk from 'msk'

const zipCodeMask = (zipCode) => msk.fit(zipCode, '99999-999')

const fetchCep = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((resp) => resp.json())
    .then((data) => data)
}

const SignupPage = ({ onSave }) => {
  const { register, handleSubmit, watch, errors, setValue, control } = useForm()
  const onSubmit = (data) => onSave(data)
  const zipCode = watch('zipCode')
  const handleZipCode = async (zipCode) => {
    setValue('zipCode', zipCodeMask(zipCode))
    if (zipCode.length === 9) {
      const address = await fetchCep(zipCode)
      setValue('address', address['logradouro'])
      setValue('state', address['uf'])
      setValue('city', address['localidade'])
    }
  }

  useEffect(() => {
    register('zipCode', { required: true })
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="company"
        placeholder="Nome fantasia"
        width="100%"
        initialValue="Test"
        ref={register({ required: true })}
      >
        Empresa
      </Input>
      <Spacer y={0.5} />

      <Input
        initialValue="27933-160"
        name="zipCode"
        placeholder="99999-999"
        width="100%"
        value={zipCode}
        onChange={(e) => handleZipCode(e.target.value)}
        maxLength={9}
      >
        CEP
      </Input>
      <Spacer y={0.5} />

      <Input
        name="address"
        placeholder="Endereço"
        width="100%"
        ref={register}
        disabled
      >
        Endereço
      </Input>
      <Spacer y={0.5} />

      <Input
        name="state"
        placeholder="Estado"
        width="100%"
        ref={register}
        disabled
      >
        Estado
      </Input>
      <Spacer y={0.5} />

      <Input
        name="city"
        placeholder="Cidade"
        width="100%"
        ref={register}
        disabled
      >
        Cidade
      </Input>
      <Spacer y={0.5} />

      <Spacer y={0.5} />

      <Button type="success" htmlType="submit">
        Finalizar
      </Button>
    </form>
  )
}

export default SignupPage
