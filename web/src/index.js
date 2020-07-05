import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'
import * as firebase from 'firebase/app'
import 'firebase/auth'

import AuthProvider from 'src/auth/AuthProvider'
import { useAuth } from 'src/auth/useAuth'
import Routes from 'src/Routes'

import firebaseConfig from './firebaseConfig.json'

const firebaseClient = ((config) => {
  firebase.initializeApp(config)
  return firebase
})(firebaseConfig)

import './scaffold.css'
ReactDOM.render(
  <ZeitProvider>
    <CssBaseline />
    <FatalErrorBoundary page={FatalErrorPage}>
      <AuthProvider client={firebaseClient}>
        <RedwoodProvider>
          <Routes />
        </RedwoodProvider>
      </AuthProvider>
    </FatalErrorBoundary>
  </ZeitProvider>,
  document.getElementById('redwood-app')
)
