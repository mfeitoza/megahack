import Request from 'src/components/Request'
import { Text, Row, Col, Spacer } from '@zeit-ui/react'

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
      <Request request={request} />
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
