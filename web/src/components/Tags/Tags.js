import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($name: String!) {
    deleteTag(name: $name) {
      name
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TagsList = ({ tags }) => {
  const { addMessage } = useFlash()
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      addMessage('Tag deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (name) => {
    if (confirm('Are you sure you want to delete tag ' + name + '?')) {
      deleteTag({ variables: { name }, refetchQueries: ['TAGS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => (
            <tr key={tag.name}>
              <td>{truncate(tag.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tag({ id: tag.name })}
                    title={'Show tag ' + tag.name + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTag({ id: tag.name })}
                    title={'Edit tag ' + tag.name}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete tag ' + tag.name}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tag.name)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TagsList
