import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_REQUEST_MUTATION = gql`
  mutation DeleteRequestMutation($id: String!) {
    deleteRequest(id: $id) {
      id
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

const RequestsList = ({ requests }) => {
  const { addMessage } = useFlash()
  const [deleteRequest] = useMutation(DELETE_REQUEST_MUTATION, {
    onCompleted: () => {
      addMessage('Request deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete request ' + id + '?')) {
      deleteRequest({ variables: { id }, refetchQueries: ['REQUESTS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>createdAt</th>
            <th>createdById</th>
            <th>validUntil</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{truncate(request.id)}</td>
              <td>{truncate(request.title)}</td>
              <td>{truncate(request.description)}</td>
              <td>{timeTag(request.createdAt)}</td>
              <td>{truncate(request.createdById)}</td>
              <td>{timeTag(request.validUntil)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.request({ id: request.id })}
                    title={'Show request ' + request.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRequest({ id: request.id })}
                    title={'Edit request ' + request.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete request ' + request.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(request.id)}
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

export default RequestsList
