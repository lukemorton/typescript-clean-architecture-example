import * as React from 'react'
import app from '../../lib/app'
import { Profile } from '../../components/User'

export default app.page(class extends React.Component {
  props: {
    user: { name: string }
  }

  render () {
    return (
      <div>
        <h1>Hello world!</h1>

        <Profile {...this.props.user} />
      </div>
    )
  }
})
