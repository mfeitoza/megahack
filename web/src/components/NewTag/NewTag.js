import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { Text } from '@zeit-ui/react'
import TagForm from 'src/components/TagForm'

const CREATE_TAG_MUTATION = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      name
    }
  }
`

const NewTag = () => {
  const { addMessage } = useFlash()
  const [createTag, { loading, error }] = useMutation(CREATE_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.tags())
    },
  })

  const onSave = (input) => {
    createTag({ variables: { input } })
  }

  return (
    <>
      <Text h2>Nova Tag</Text>
      <TagForm onSave={onSave} loading={loading} error={error} />
    </>
  )
}

export default NewTag
