import * as React from 'react'
import app from '../../lib/app'
import User from '../../lib/user/User'
import { Page } from '../../components/Common'
import { Profile } from '../../components/User'

export default app.page(class extends React.Component {
  props: {
    user: User
  }

  render () {
    return (
      <Page title={this.props.user.name}>
        <Profile {...this.props.user} />
      </Page>
    )
  }
})
