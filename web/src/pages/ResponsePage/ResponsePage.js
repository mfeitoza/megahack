import AppLayout from 'src/layouts/AppLayout'

import RequestCell from 'src/components/Request/RequestCell'
import NewResponse from 'src/components/Response/NewResponse'

const RequestPage = ({ id }) => {
  return (
    <AppLayout>
      <RequestCell id={id} />
      <NewResponse />
    </AppLayout>
  )
}

export default RequestPage
