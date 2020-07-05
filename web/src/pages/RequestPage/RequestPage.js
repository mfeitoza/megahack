import AppLayout from 'src/layouts/AppLayout'

import RequestCell from 'src/components/Request/RequestCell'

const RequestPage = ({ id }) => {
  return (
    <AppLayout>
      <RequestCell id={id} />
    </AppLayout>
  )
}

export default RequestPage
