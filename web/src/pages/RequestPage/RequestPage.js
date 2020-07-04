import RequestsLayout from 'src/layouts/RequestsLayout'

import RequestCell from 'src/components/Request/RequestCell'

const RequestPage = ({ id }) => {
  return (
    <RequestsLayout>
      <RequestCell id={id} />
    </RequestsLayout>
  )
}

export default RequestPage
