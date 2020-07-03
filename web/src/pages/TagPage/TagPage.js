import TagsLayout from 'src/layouts/TagsLayout'
import TagCell from 'src/components/TagCell'

const TagPage = ({ id }) => {
  return (
    <TagsLayout>
      <TagCell id={id} />
    </TagsLayout>
  )
}

export default TagPage
