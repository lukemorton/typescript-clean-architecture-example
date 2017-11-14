import * as React from 'react'

interface Friend {
  name: string
}

interface FriendsListProps {
  friends: Array<Friend>
}

export default ({ friends }: FriendsListProps) =>
  <ul>
    {friends.map(({ name }, i) => <li key={i}>{name}</li>)}
  </ul>
