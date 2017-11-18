import * as React from 'react'
import FriendsList from './FriendsList'

export default ({ name, biography, twitter, friends }) =>
  <div>
    <style jsx>{`
      .header {
        font-size: 3em;
      }
    `}</style>
    <div className='header'>{name}</div>
    <p>{biography}</p>
    <p>Follow on twitter: {twitter}</p>

    <FriendsList friends={friends} />
  </div>
