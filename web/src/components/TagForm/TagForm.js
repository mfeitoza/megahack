import { useEffect } from 'react'
import { Input, useInput } from '@zeit-ui/react'

const TagForm = (props) => {
  const { state, setState, reset, bindings } = useInput('')
  useEffect(() => props.setTagInput(state), [state])

  return (
    <Input
      name="name"
      defaultValue={props.tag?.name}
      validation={{ required: true }}
      width="100%"
      {...bindings}
    >
      Nome da tag
    </Input>
  )
}

export default TagForm
