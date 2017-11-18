import * as React from 'react'
import app from '../../lib/app'
import { Page } from '../../components/Common'

export default app.page(class extends React.Component {
  render () {
    return (
      <Page title='Welcome'>
        <h1>Welcome</h1>
      </Page>
    )
  }
})
