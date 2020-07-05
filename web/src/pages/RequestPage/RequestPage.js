import AppLayout from 'src/layouts/AppLayout'

import RequestAndResponsesCell from 'src/components/Request/RequestAndResponsesCell'

const RequestPage = ({ id }) => {
  return (
    <AppLayout>
      <RequestAndResponsesCell id={id} />
    </AppLayout>
  )
}

export default RequestPage
