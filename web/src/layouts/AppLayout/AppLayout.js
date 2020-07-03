import { routes, useLocation, navigate } from '@redwoodjs/router'
import { Page, Grid, User, Tabs, useTabs } from '@zeit-ui/react'
import Minimize2 from '@zeit-ui/react-icons/minimize2'

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

  console.log(pathname)
  return (
    <>
      <Page>
        <Grid.Container gap={2}>
          <Grid md={12}>
            <Minimize2 size={32} />
          </Grid>
          <Grid md={12} alignContent="center">
            <User
              style={{ float: 'right' }}
              src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160"
              name="Diego Suque"
            />
          </Grid>
        </Grid.Container>
        <Tabs {...bindings} onChange={onChange}>
          <Tabs.Item label="Feed" value="/home" />
          <Tabs.Item label="Fornecedores" value="/suppliers" />
        </Tabs>
        <main>{children}</main>
      </Page>
    </>
  )
}

export default AppLayout
