import { Link, routes } from '@redwoodjs/router'
import Tags from 'src/components/Tags'
import LoadIndicator from 'src/components/LoadIndicator'
export const QUERY = gql`
  query TAGS {
    tags {
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <LoadIndicator />

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

export const Success = ({ tags }) => {
  return <Tags tags={tags} />
}
