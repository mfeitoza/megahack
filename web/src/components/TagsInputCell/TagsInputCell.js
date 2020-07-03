import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate, useLocation } from '@redwoodjs/router'
import { Select, Button, Grid, Modal } from '@zeit-ui/react'
import TagForm from 'src/components/TagForm'

export const QUERY = gql`
  query TAGS {
    tags {
      id
      name
    }
  }
`

const CREATE_TAG_MUTATION = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => (
  <Select
    name={name}
    placeholder="Selecione as tags"
    width="100%"
    defaultValue={1}
  >
    <Select.Option value={1}>Carregando...</Select.Option>
  </Select>
)

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tags yet. '}
      <Link to={routes.newTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tags, name, onChange }) => {
  const [showModal, setShowModal] = useState(false)
  const showModalHandler = () => setShowModal(true)
  const closeHandler = (event) => {
    setShowModal(false)
  }

  const [tagInput, setTagInput] = useState('')
  const [createTag, { loading, error }] = useMutation(CREATE_TAG_MUTATION, {
    onCompleted: () => {
      setShowModal(false)
    },
  })

  const newTagHandler = (name) => {
    createTag({
      variables: {
        input: { name },
      },
    })
  }

  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={14}>
          <Select
            name={name}
            placeholder="Selecione as tags"
            onChange={onChange}
            width="100%"
            multiple
          >
            {tags.map((tag) => (
              <Select.Option key={tag.id} value={tag.id}>
                {tag.name.toLowerCase()}
              </Select.Option>
            ))}
          </Select>
        </Grid>

        <Grid xs={8}>
          <Button onClick={showModalHandler}>Nova Tag</Button>
        </Grid>
      </Grid.Container>
      <Modal open={showModal} onClose={closeHandler}>
        <Modal.Title>Tag</Modal.Title>
        <Modal.Subtitle>Adicionar nova tag</Modal.Subtitle>
        <Modal.Content>
          <TagForm tagInput={tagInput} setTagInput={setTagInput}></TagForm>
        </Modal.Content>
        <Modal.Action passive onClick={() => setShowModal(false)}>
          Cancelar
        </Modal.Action>
        <Modal.Action onClick={() => newTagHandler(tagInput)}>
          Adicionar
        </Modal.Action>
      </Modal>
    </>
  )
}
