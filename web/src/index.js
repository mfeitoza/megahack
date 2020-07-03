import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

import Routes from 'src/Routes'

import './index.css'

ReactDOM.render(
  <ZeitProvider>
    <CssBaseline />
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ZeitProvider>,
  document.getElementById('redwood-app')
)
