import { routes, useLocation, navigate } from '@redwoodjs/router'
import { Page, Grid, Tabs, useTabs } from '@zeit-ui/react'
import Minimize2 from '@zeit-ui/react-icons/minimize2'
import UserAvatarCell from 'src/components/UserAvatarCell'

import { useAuth } from 'src/auth/useAuth'

const tabsRoute = {
  '/home': routes.home,
  '/suppliers': routes.login,
}

const onChange = (tab) => {
  navigate(tabsRoute[tab]())
}

const AppLayout = ({ children }) => {
  const { pathname } = useLocation()
  const { setTab, bindings } = useTabs(pathname)

  const { userMetadata } = useAuth()
  console.log(userMetadata)
  return (
    <>
      <Page style={{ paddingTop: '1rem' }}>
        <Page.Header>
          <Grid.Container gap={2}>
            <Grid md={12}>
              <Minimize2 size={32} />
            </Grid>
            <Grid md={12} alignContent="center">
              <UserAvatarCell email={userMetadata.email} />
            </Grid>
          </Grid.Container>
        </Page.Header>
        <Tabs {...bindings} onChange={onChange}>
          <Tabs.Item label="Feed" value="/home" />
          <Tabs.Item label="Fornecedores" value="/suppliers" />
        </Tabs>
        <Page.Content>{children}</Page.Content>
      </Page>
    </>
  )
}

export default AppLayout
