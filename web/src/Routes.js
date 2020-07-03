// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/categories/new" page={NewCategoryPage} name="newCategory" />
      <Route
        path="/categories/{id:Int}/edit"
        page={EditCategoryPage}
        name="editCategory"
      />
      <Route path="/categories/{id:Int}" page={CategoryPage} name="category" />
      <Route path="/categories" page={CategoriesPage} name="categories" />
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
