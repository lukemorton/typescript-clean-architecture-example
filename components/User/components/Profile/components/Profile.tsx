import * as React from 'react'
import glamorous from 'glamorous'
import Header from './Header'
import FriendsList from './FriendsList'

const Profile = glamorous.div()

export default ({ name, biography, twitter, friends }) =>
  <Profile>
    <Header name={name} biography={biography} twitter={twitter} />

    <FriendsList friends={friends} />
  </Profile>
