import { Form, FormError } from '@redwoodjs/web'
import { Input, Textarea, Spacer, Button } from '@zeit-ui/react'
import TagsInputCell from 'src/components/TagsInputCell'

const RequestForm = (props) => {
  const onSubmit = (data) => {
    console.log(data)
    props.onSave(data, props?.request?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError
        error={props.error}
        wrapperClassName="rw-form-error-wrapper"
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
      />

      <Input
        name="title"
        defaultValue={props.request?.title}
        validation={{ required: true }}
        width="100%"
        placeholder="Resumo da sua requisição"
      >
        Título
      </Input>

      <Textarea
        name="description"
        defaultValue={props.request?.description}
        className="rw-input"
        width="100%"
        placeholder="Detalhe melhor sua requisição"
      >
        Descrição
      </Textarea>
      <Spacer y={0.5} />

      <TagsInputCell name="tags" onChange="test" />
      <Spacer y={0.5} />

      <Input
        name="validUntil"
        defaultValue={props.request?.validUntil}
        validation={{ required: true }}
        placeholder="dd/mm/yy"
      >
        Validade
      </Input>
      <Spacer y={0.5} />

      <Button type="success" htmlType="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default RequestForm
