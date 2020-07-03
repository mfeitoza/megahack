import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'
import * as firebase from 'firebase/app'
import 'firebase/auth'

import AuthProvider from 'src/auth/AuthProvider'
import { useAuth } from 'src/auth/useAuth'
import Routes from 'src/Routes'

const firebaseConfig = {
  apiKey: 'AIzaSyDjZSyR6cpd5jrh4Sx8nxK6h1iAq-9BJBg',
  authDomain: 'megahack-84970.firebaseapp.com',
  databaseURL: 'https://megahack-84970.firebaseio.com',
  projectId: 'megahack-84970',
  storageBucket: 'megahack-84970.appspot.com',
  messagingSenderId: '263418950290',
  appId: '1:263418950290:web:817314884331340f67ec4b',
  measurementId: 'G-6DD498HYZD',
}

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
