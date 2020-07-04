import { Form, FormError } from '@redwoodjs/web'
import { useForm, Controller } from 'react-hook-form'
import { Input, Textarea, Spacer, Button } from '@zeit-ui/react'
import TagsInputCell from 'src/components/TagsInputCell'
import { useEffect } from 'react'
import msk from 'msk'

function dateMask(date) {
  return msk.fit(date, '99/99/9999')
}

const RequestForm = (props) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
  } = useForm()
  const validUntil = watch('validUntil')
  const handleValidUntilInput = (value) => {
    console.log(dateMask(value))
    setValue('validUntil', dateMask(value))
  }
  const handleTagsInput = (value) => {
    setValue('tags', value)
  }

  useEffect(() => {
    register('tags', { required: true })
    register('validUntil', { required: true })
  }, [register])

  const onSubmit = (data) => {
    const [day, month, year] = data['validUntil'].split('/')
    data['validUntil'] = new Date(`${year}-${month}-${day}T00:00:00`)
    props.onSave(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        value={getValues('tags')}
      />
      <Spacer y={0.5} />

      <Input
        name="validUntil"
        defaultValue={props.request?.validUntil}
        validation={{ required: true }}
        placeholder="dd/mm/aaaa"
        value={validUntil}
        onChange={(e) => handleValidUntilInput(e.target.value)}
        maxLength={10}
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
