import { render } from '@redwoodjs/testing'

import CompanyPage from './SignupPage'

describe('SignupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyPage />)
    }).not.toThrow()
  })
})
