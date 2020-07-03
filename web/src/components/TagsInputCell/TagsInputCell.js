import { Link, routes } from '@redwoodjs/router'
import { Select } from '@zeit-ui/react'
import Tags from 'src/components/Tags'

export const QUERY = gql`
  query TAGS {
    tags {
      id
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tags yet. '}
      <Link to={routes.newTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tags, name, onChange }) => {
  console.log(onChange)
  const handler = (val) => console.log(val)
  return (
    <Select
      name={name}
      placeholder="Selecione as tags"
      onChange={handler}
      width="100%"
      multiple
    >
      {tags.map((tag) => (
        <Select.Option key={tag.id} value={tag.id}>
          {tag.name}
        </Select.Option>
      ))}
    </Select>
  )
}
