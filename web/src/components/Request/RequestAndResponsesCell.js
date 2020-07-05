import Request from 'src/components/Request'
import {
  Card,
  Text,
  Row,
  Col,
  Description,
  Divider,
  Button,
  Spacer,
} from '@zeit-ui/react'
import MapPin from '@zeit-ui/react-icons/mapPin'

import Response from 'src/components/Response/Response'
export const QUERY = gql`
  query FIND_REQUEST_BY_ID($id: String!) {
    request: request(id: $id) {
      id
      title
      description
      tags {
        name
      }
      user {
        id
        name
      }
      company {
        id
        company
        address
        city
      }
      createdAt
      companyId
      validUntil
      responses {
        id
        title
        description
        createdAt
        company {
          company
          address
          state
          city
          user {
            name
            phone
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Request not found</div>

export const Success = ({ request }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Row justify="center" align="middle">
            <Col span={24}>
              <Text h4>Requisição: {request.title}</Text>
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
      <Spacer y={1} />
      <Text h4 align="center">
        Respostas
      </Text>
      {request.responses?.map((response) => (
        <div key={response.id}>
          <Spacer y={1} />
          <Row justify="center">
            <Col span={20}>
              <Response response={response} />
            </Col>
          </Row>
        </div>
      ))}
    </>
  )
}
