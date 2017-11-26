import * as React from 'react'
import glamorous from 'glamorous'
import Header from './Header'
import FriendsList from './FriendsList'

const Profile = glamorous.div()

interface ProfileProps {
  name: string
  biography: string
  twitter: string
  friends: any
}

export default ({ name, biography, twitter, friends }: ProfileProps) =>
  <Profile>
    <Header name={name} biography={biography} twitter={twitter} />

    <FriendsList friends={friends} />
  </Profile>
