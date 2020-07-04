import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($name: Int!) {
    deleteTag(name: $name) {
      name
    }
  }
`

const Tag = ({ tag }) => {
  const { addMessage } = useFlash()
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.tags())
      addMessage('Tag deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (name) => {
    if (confirm('Are you sure you want to delete tag ' + name + '?')) {
      deleteTag({ variables: { name } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tag {tag.name} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>name</th>
              <td>{tag.name}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{tag.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTag({ name: tag.name })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tag.name)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Tag
