import * as React from 'react'
import { LoadUserProfile } from '../lib/user/'
import UserProfile from '../components/UserProfile'

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

        <UserProfile {...this.props.user} />
      </div>
    )
  }
}
