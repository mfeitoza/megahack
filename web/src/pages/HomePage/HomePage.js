import AppLayout from 'src/layouts/AppLayout'
import { Link, routes } from '@redwoodjs/router'
import { Button, Spacer, Grid } from '@zeit-ui/react'

import RequestFeedCell from 'src/components/Feed/RequestsFeedCell'

const HomePage = () => {
  return (
    <AppLayout>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Link to={routes.newRequest()}>
            <Button type="success" shadow>
              Criar requisição
            </Button>
          </Link>
        </Grid>

        <Grid xs={24}>
          <RequestFeedCell />
        </Grid>
      </Grid.Container>
    </AppLayout>
  )
}

export default HomePage
