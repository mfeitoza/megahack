import { Card, Text, Row, Col, Description, Divider } from '@zeit-ui/react'
import MapPin from '@zeit-ui/react-icons/mapPin'

const Company = ({ company }) => {
  return (
    <>
      <Card shadow>
        <Card.Content>
          <Row align="middle">
            <Col>
              <Text h4>{company.company}</Text>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Description title="Contato" content={company.user.name} />
            </Col>
            <Col span={10} offset={2}>
              <Description title="Telefone" content={company.user.phone} />
            </Col>
          </Row>
        </Card.Content>
        <Divider y={0} />
        <Card.Content>
          <Row align="middle">
            <Col span={2}>
              <MapPin size={20} />
            </Col>
            <Col>{`${company.address}, ${company.city}`}</Col>
          </Row>
        </Card.Content>
      </Card>
    </>
  )
}

export default Company
