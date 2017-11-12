import * as React from 'react'
import { LoadUserProfile } from '../lib/user/'
import { Profile } from '../components/User'

export default class extends React.Component {
  props: {
    user: { name: string }
  }

  static async getInitialProps () {
    return await LoadUserProfile({ id: 'guid' })
  }

  render () {
    return (
      <div>
        <h1>Hello world!</h1>

        <Profile {...this.props.user} />
      </div>
    )
  }
}
