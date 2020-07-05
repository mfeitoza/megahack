import AppLayout from 'src/layouts/AppLayout'
import { Grid } from '@zeit-ui/react'

import SuppliersCell from 'src/components/Company/SuppliersCell'

const HomePage = () => {
  return (
    <AppLayout>
      <Grid.Container gap={2} justify="center">
        <SuppliersCell />
      </Grid.Container>
    </AppLayout>
  )
}

export default HomePage
