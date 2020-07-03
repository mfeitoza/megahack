import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_REQUEST_MUTATION = gql`
  mutation DeleteRequestMutation($id: String!) {
    deleteRequest(id: $id) {
      id
    }
  }
`

const Request = ({ request }) => {
  const { addMessage } = useFlash()
  const [deleteRequest] = useMutation(DELETE_REQUEST_MUTATION, {
    onCompleted: () => {
      navigate(routes.requests())
      addMessage('Request deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete request ' + id + '?')) {
      deleteRequest({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Request {request.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{request.id}</td>
            </tr>
            <tr>
              <th>title</th>
              <td>{request.title}</td>
            </tr>
            <tr>
              <th>description</th>
              <td>{request.description}</td>
            </tr>
            <tr>
              <th>createdAt</th>
              <td>{request.createdAt}</td>
            </tr>
            <tr>
              <th>createdById</th>
              <td>{request.createdById}</td>
            </tr>
            <tr>
              <th>validUntil</th>
              <td>{request.validUntil}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRequest({ id: request.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(request.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Request
