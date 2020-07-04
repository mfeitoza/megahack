import Tag from 'src/components/Tag'

export const QUERY = gql`
  query FIND_TAG_BY_name($name: Int!) {
    tag: tag(name: $name) {
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tag not found</div>

export const Success = ({ tag }) => {
  return <Tag tag={tag} />
}
