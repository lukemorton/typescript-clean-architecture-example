import * as React from 'react'
import { shallow } from 'enzyme'
import FriendsList from './FriendsList'

describe('FriendsList', () => {
  describe('when there are friends', () => {
    const friends = [
      { name: 'Bob' },
      { name: 'Frankie' }
    ]

    it('should list friends', () => {
      const friendsList = shallow(<FriendsList friends={friends} />)
      expect(friendsList).toIncludeText('Bob')
      expect(friendsList).toIncludeText('Frankie')
    })
  })
})
