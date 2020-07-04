import { useEffect } from 'react'
import { Input, Button, Spacer } from '@zeit-ui/react'
import { useForm } from 'react-hook-form'

const TagForm = ({ onSave, tag }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => onSave(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        defaultValue={tag?.name}
        validation={{ required: true }}
        width="100%"
        ref={register}
      >
        Tag
      </Input>
      <Spacer y={0.5} />
      <Button type="success" htmlType="submit">
        Criar tag
      </Button>
    </form>
  )
}

export default TagForm
