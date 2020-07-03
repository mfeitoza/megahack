import TagsLayout from 'src/layouts/TagsLayout'
import EditTagCell from 'src/components/EditTagCell'

const EditTagPage = ({ id }) => {
  return (
    <TagsLayout>
      <EditTagCell id={id} />
    </TagsLayout>
  )
}

export default EditTagPage
