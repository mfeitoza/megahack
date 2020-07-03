import { createContext, Component } from 'react'

import createAuthClient from './createAuthClient'

export const AuthContext = createContext({})

let AuthProvider = (() => {
  class AuthProvider extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        isAuthenticated: false,
        userMetadata: null,
        currentUser: null,
      }
      this.getCurrentUser = async () => {
        var _a
        if (this.props.skipFetchCurrentUser) {
          return undefined
        }
        const token = await this.rwClient.getToken()
        const response = await window.fetch(
          `${window.__REDWOOD__API_PROXY_PATH}/graphql`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'auth-provider': this.rwClient.type,
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              query:
                'query __REDWOOD__AUTH_GET_CURRENT_USER { redwood { currentUser } }',
            }),
          }
        )
        if (response.ok) {
          const { data } = await response.json()
          return (_a =
            data === null || data === void 0 ? void 0 : data.redwood) ===
            null || _a === void 0
            ? void 0
            : _a.currentUser
        }
      }
      this.reauthenticate = async () => {
        const userMetadata = await this.rwClient.getUserMetadata()
        const isAuthenticated = userMetadata !== null
        let currentUser = null
        if (isAuthenticated) {
          currentUser = await this.getCurrentUser()
        }
        this.setState({
          userMetadata,
          currentUser,
          isAuthenticated,
          loading: false,
        })
      }
      this.logIn = async (options) => {
        await this.rwClient.login(options)
        return this.reauthenticate()
      }
      this.logOut = async (options) => {
        await this.rwClient.logout(options)
        this.setState({
          userMetadata: null,
          currentUser: null,
          isAuthenticated: false,
        })
      }
      this.rwClient = createAuthClient(props.client)
    }
    async componentDidMount() {
      var _a, _b
      await ((_b = (_a = this.rwClient).restoreAuthState) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a))
      return this.reauthenticate()
    }
    render() {
      const { client, type, children } = this.props
      return (
        <AuthContext.Provider
          value={{
            ...this.state,
            logIn: this.logIn,
            logOut: this.logOut,
            getToken: this.rwClient.getToken,
            getCurrentUser: this.getCurrentUser,
            reauthenticate: this.reauthenticate,
            client,
            type,
          }}
        >
          {children}
        </AuthContext.Provider>
      )
    }
  }
  AuthProvider.defaultProps = {
    skipFetchCurrentUser: false,
  }
  return AuthProvider
})()

export default AuthProvider
