import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TagForm from 'src/components/TagForm'

const CREATE_TAG_MUTATION = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
    }
  }
`

const NewTag = () => {
  const { addMessage } = useFlash()
  const [createTag, { loading, error }] = useMutation(CREATE_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.tags())
      addMessage('Tag created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createTag({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tag</h2>
      </header>
      <div className="rw-segment-main">
        <TagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTag
