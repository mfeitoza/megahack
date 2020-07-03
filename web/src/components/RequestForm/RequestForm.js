import { Form, FormError } from '@redwoodjs/web'
import { useForm, Controller } from 'react-hook-form'
import { Input, Textarea, Spacer, Button } from '@zeit-ui/react'
import TagsInputCell from 'src/components/TagsInputCell'
import { useEffect } from 'react'

const RequestForm = (props) => {
  const { register, handleSubmit, control, setValue, watch, errors } = useForm()

  const handleTagsInput = (value) => {
    setValue('tags', value)
  }

  useEffect(() => {
    register('tags', { required: true })
  }, [register])

  const onSubmit = (data) => {
    console.log(errors)
    //props.onSave(data, props?.request?.id)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} error={props.error}>
      <Input
        name="title"
        defaultValue={props.request?.title}
        validation={{ required: true }}
        width="100%"
        placeholder="Resumo da sua requisição"
        ref={register({ required: true })}
      >
        Título
      </Input>

      <Controller
        as={Textarea}
        control={control}
        name="description"
        defaultValue={props.request?.description}
        className="rw-input"
        width="100%"
        rules={{ required: true }}
        placeholder="Detalhe melhor sua requisição"
      />

      <Spacer y={0.5} />

      <TagsInputCell
        name="tags"
        defaultValue={props.request?.tags}
        width="100%"
        onChange={handleTagsInput}
      />
      <Spacer y={0.5} />

      <Input
        name="validUntil"
        defaultValue={props.request?.validUntil}
        validation={{ required: true }}
        placeholder="dd/mm/yy"
        ref={register({ required: true })}
      >
        Validade
      </Input>
      <Spacer y={0.5} />

      <Button type="success" htmlType="submit">
        Enviar
      </Button>
    </form>
  )
}

export default RequestForm
