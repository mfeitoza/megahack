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
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/signup/{id}" page={SignupCompanyPage} name="newCompany" />
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="login">
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/requests/new" page={NewRequestPage} name="newRequest" />
        <Route
          path="/requests/{id}/edit"
          page={EditRequestPage}
          name="editRequest"
        />
        <Route path="/requests/{id}" page={RequestPage} name="request" />
        <Route path="/requests" page={RequestsPage} name="requests" />
        <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
        <Route path="/tags/new" page={NewTagPage} name="newTag" />
        <Route path="/tags/{id:Int}/edit" page={EditTagPage} name="editTag" />
        <Route path="/tags/{id:Int}" page={TagPage} name="tag" />
        <Route path="/tags" page={TagsPage} name="tags" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
