import { User } from '@zeit-ui/react'
import { navigate, routes, Link } from '@redwoodjs/router'

export const beforeQuery = ({ email }) => ({
  variables: { email },
})

export const QUERY = gql`
  query FIND_USER_BY_EMAIL($email: String!) {
    user: findUserByEmail(email: $email) {
      id
      email
      name
      company {
        id
        company
        isSupplier
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  if (user.company === null)
    setTimeout(() => navigate(routes.newCompany({ id: user.id })), 50)
  return (
    <Link to={routes.profile({ id: user.id })}>
      <User style={{ float: 'right' }} name={user.name} />
    </Link>
  )
}
