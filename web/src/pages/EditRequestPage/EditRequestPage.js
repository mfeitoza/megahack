import RequestsLayout from 'src/layouts/RequestsLayout'
import EditRequestCell from 'src/components/EditRequestCell'

const EditRequestPage = ({ id }) => {
  return (
    <RequestsLayout>
      <EditRequestCell id={id} />
    </RequestsLayout>
  )
}

export default EditRequestPage
