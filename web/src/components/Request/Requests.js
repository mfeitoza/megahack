import { Grid } from '@zeit-ui/react'
import Request from 'src/components/Request'

const Requests = ({ requests, action }) => {
  return (
    <Grid.Container gap={2}>
      {requests.map((request) => (
        <Grid key={request.id} xs={24}>
          <Request request={request} action={action} />
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default Requests
