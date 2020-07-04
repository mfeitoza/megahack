import { routes, useLocation, navigate } from '@redwoodjs/router'
import { Page, Row, Col, Tabs, Button, useTabs } from '@zeit-ui/react'
import Minimize2 from '@zeit-ui/react-icons/minimize2'
import UserAvatarCell from 'src/components/UserAvatarCell'

import { useAuth } from 'src/auth/useAuth'

const tabsRoute = {
  '/home': routes.home,
  '/suppliers': routes.suppliers,
}

const onChange = (tab) => {
  navigate(tabsRoute[tab]())
}

const AppLayout = ({ children }) => {
  const { pathname } = useLocation()
  const { setTab, bindings } = useTabs(pathname)

  const { userMetadata, logOut } = useAuth()
  console.log(userMetadata)
  return (
    <>
      <Page style={{ paddingTop: '1rem' }}>
        <Page.Header>
          <Row gap={1} justify="center" style={{ margin: '0px' }}>
            <Col>
              <Row justify="start">
                <Minimize2 size={32} />
              </Row>
            </Col>
            <Col>
              <UserAvatarCell email={userMetadata.email} />
            </Col>
            <Col>
              <Row justify="end" align="middle">
                <Button size="mini" auto onClick={() => logOut()}>
                  Sair
                </Button>
              </Row>
            </Col>
          </Row>
        </Page.Header>
        <Tabs {...bindings} onChange={onChange}>
          <Tabs.Item label="Feed" value="/home" />
          <Tabs.Item label="Fornecedores" value="/suppliers" />
        </Tabs>
        <Page.Content style={{ padding: 0 }}>{children}</Page.Content>
      </Page>
    </>
  )
}

export default AppLayout
