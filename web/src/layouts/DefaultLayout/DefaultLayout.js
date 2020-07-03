import { Page } from '@zeit-ui/react'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Page>
        <main>{children}</main>
      </Page>
    </>
  )
}

export default DefaultLayout
