import {
  Description,
  Spacer,
  Toggle,
  Text,
  Divider,
  Row,
  Col,
} from '@zeit-ui/react'
import LoadIndicator from 'src/components/LoadIndicator'
import User from '@zeit-ui/react-icons/user'
import Bell from '@zeit-ui/react-icons/bell'
import Briefcase from '@zeit-ui/react-icons/briefcase'

export const beforeQuery = ({ id }) => ({
  variables: { id },
})

export const QUERY = gql`
  query FIND_USER_BY_EMAIL($id: String!) {
    user: user(id: $id) {
      id
      email
      name
      phone
      company {
        id
        company
        state
        city
        address
        isSupplier
      }
    }
  }
`

export const Loading = () => <LoadIndicator />

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  return (
    <>
      <Row align="middle">
        <Col span={2}>
          <User />
        </Col>
        <Col>
          <Text h3>Perfil</Text>
        </Col>
      </Row>

      <Description title="Nome" content={user.name} />
      <Spacer y={1} />
      <Description title="Telefone" content={user.phone} />
      <Spacer y={1} />
      <Description title="email" content={user.email} />
      <Spacer y={1} />
      <Divider />

      <Row align="middle">
        <Col span={2}>
          <Briefcase />
        </Col>
        <Col>
          <Text h3>Empresa</Text>
        </Col>
      </Row>
      <Description title="Empresa" content={user.company.company} />
      <Spacer y={1} />
      <Description
        title="Endereço"
        content={`${user.company.address}, ${user.company.city} - ${user.company.state}`}
      />
      <Spacer y={1} />
      <Divider />
      <Row align="middle">
        <Col span={2}>
          <Bell />
        </Col>
        <Col>
          <Text h3>Notificações</Text>
        </Col>
      </Row>
      <Row align="middle">
        <Col span={3}>
          <Toggle initialChecked />
        </Col>
        <Col>
          <Text size="" span>
            Receber Notificações por WhatsApp
          </Text>
        </Col>
      </Row>
    </>
  )
}
