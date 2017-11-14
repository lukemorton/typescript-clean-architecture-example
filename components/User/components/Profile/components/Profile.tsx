import * as React from 'react'
import FriendsList from './FriendsList'

export default ({ name, biography, twitter, friends }) =>
  <div>
    <p>{name}</p>
    <p>{biography}</p>
    <p>Follow on twitter: {twitter}</p>

    <FriendsList friends={friends} />
  </div>
