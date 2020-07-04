import { useForm, Controller } from 'react-hook-form'
import { Input, Textarea, Spacer, Button } from '@zeit-ui/react'

const ResponseForm = (props) => {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    props.onSave(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="title"
        validation={{ required: true }}
        width="100%"
        placeholder="Resumo da sua reposta"
        ref={register({ required: true })}
      >
        Título
      </Input>

      <Controller
        as={Textarea}
        control={control}
        name="description"
        className="rw-input"
        width="100%"
        rules={{ required: true }}
        placeholder="Detalhe melhor sua resposta"
      />

      <Spacer y={0.5} />

      <Button type="success" htmlType="submit">
        Enviar
      </Button>
    </form>
  )
}

export default ResponseForm
