import AppLayout from 'src/layouts/AppLayout'
import { Grid } from '@zeit-ui/react'

import ProfileCell from 'src/components/Profile/ProfileCell'

const HomePage = ({ id }) => {
  return (
    <AppLayout>
      <Grid.Container gap={2} justify="center">
        <Grid xs={24}>
          <ProfileCell id={id} />
        </Grid>
      </Grid.Container>
    </AppLayout>
  )
}

export default HomePage
