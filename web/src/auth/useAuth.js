import { useContext } from 'react'

import { AuthContext } from './AuthProvider'
export const useAuth = () => {
  return useContext(AuthContext)
}
window.__REDWOOD__USE_AUTH = useAuth
