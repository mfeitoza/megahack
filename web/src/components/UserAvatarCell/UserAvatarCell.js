import { User } from '@zeit-ui/react'

export const beforeQuery = ({ email }) => ({
  variables: { email },
})

export const QUERY = gql`
  query FIND_USER_BY_EMAIL($email: String!) {
    user: findUserByEmail(email: $email) {
      id
      email
      name
      company
      zipCode
      address
      state
      city
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  return (
    <User
      style={{ float: 'right' }}
      src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160"
      name={user.name}
    />
  )
}
