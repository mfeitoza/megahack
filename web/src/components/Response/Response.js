import {
  Card,
  Button,
  Description,
  Row,
  Col,
  Text,
  Link,
  Spacer,
} from '@zeit-ui/react'
import { routes } from '@redwoodjs/router'
import MapPin from '@zeit-ui/react-icons/mapPin'
import Phone from '@zeit-ui/react-icons/phone'

const Response = ({ response }) => {
  console.log(response)
  return (
    <>
      <Card>
        <Card.Content>
          <Row>
            <Col>
              <Link href={routes.home()} color>
                <Text h5>@{response.company.company}</Text>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text span b>
                {response.title}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text span>{response.description}</Text>
            </Col>
          </Row>
          <Spacer y={0.8} />
          <Row align="middle">
            <Col span={2}>
              <MapPin size={18} />
            </Col>
            <Col span={22}>
              <Text
                span
                small
              >{`${response.company.address}, ${response.company.city}`}</Text>
            </Col>
          </Row>
          <Spacer y={0.2} />
          <Row align="middle">
            <Col span={2}>
              <Phone size={18} />
            </Col>
            <Col span={22}>
              <Text span small>
                {response.company.user.phone}
              </Text>
            </Col>
          </Row>
        </Card.Content>
        <Card.Footer>
          <Row>
            <Button size="mini" type="secondary">
              Aceitar
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Response
