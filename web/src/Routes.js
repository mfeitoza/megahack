// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

import { useAuth } from 'src/auth/useAuth'
const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/signup/{id}" page={SignupCompanyPage} name="newCompany" />
      <Route path="/" page={LoginPage} name="login" />
      <Private unauthenticated="login">
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/suppliers" page={SuppliersPage} name="suppliers" />
        <Route path="/requests" page={RequestsPage} name="requests" />
        <Route path="/requests/new" page={NewRequestPage} name="newRequest" />
        <Route path="/requests/{id}" page={RequestPage} name="request" />
        <Route
          path="/requests/{id}/response"
          page={ResponsePage}
          name="response"
        />
        <Route path="/tags/new" page={NewTagPage} name="newTag" />
        <Route path="/profile/{id}" page={ProfilePage} name="profile" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
