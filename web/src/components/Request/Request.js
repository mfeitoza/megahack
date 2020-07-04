import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { Card, Text, Row, Col, Description } from '@zeit-ui/react'
import Calendar from '@zeit-ui/react-icons/calendar'

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
      <Card shadow>
        <Row align="middle">
          <Col span={16}>
            <Text h4>{request.title}</Text>
          </Col>
          <Col span={8}>
            <Row justify="end" align="middle">
              <Col span={4}>
                <Calendar size={16}></Calendar>
              </Col>
              <Col>
                <Text p small>
                  {new Date(request.validUntil).toDateString()}
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Description title="Descrição" content={request.description} />
          </Col>
          <Col>
            <Description
              title="Válido até"
              content={new Date(request.validUntil).toDateString()}
            />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Request
