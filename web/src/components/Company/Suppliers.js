import { Grid, Spacer } from '@zeit-ui/react'

import Company from './Company'

const Suppliers = ({ suppliers }) => {
  return (
    <>
      <Spacer y={1} />
      <Grid.Container gap={2}>
        {suppliers.map((company) => (
          <Grid key={company.id} xs={24}>
            <Company company={company} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}

export default Suppliers
