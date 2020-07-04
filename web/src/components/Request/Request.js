import { routes, navigate } from '@redwoodjs/router'
import {
  Card,
  Text,
  Row,
  Col,
  Description,
  Divider,
  Button,
} from '@zeit-ui/react'
import MapPin from '@zeit-ui/react-icons/mapPin'

const Request = ({ request }) => {
  return (
    <>
      <Card shadow>
        <Card.Content>
          <Row justify="center" align="middle">
            <Col span={18}>
              <Text h4>{request.title}</Text>
            </Col>
            <Col span={6}>
              <Button
                type="secondary"
                auto
                size="small"
                onClick={() => navigate(routes.response({ id: request.id }))}
              >
                Responder
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Description title="Descrição" content={request.description} />
            </Col>
            <Col span={10} offset={2}>
              <Description
                title="Válido até"
                content={new Date(request.validUntil).toDateString()}
              />
            </Col>
          </Row>
        </Card.Content>
        <Divider y={0} />
        <Card.Content>
          <Row justify="end" align="middle">
            <Col span={2}>
              <MapPin size={20} />
            </Col>
            <Col>{`${request.company.address}, ${request.company.city}`}</Col>
          </Row>
        </Card.Content>
      </Card>
    </>
  )
}

export default Request
