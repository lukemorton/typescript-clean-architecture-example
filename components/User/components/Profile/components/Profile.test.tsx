import * as React from 'react'
import { shallow } from 'enzyme'
import Profile from './Profile'
import Header from './Header'
import FriendsList from './FriendsList'

describe('<Profile />', () => {
  const props = {
    name: 'Luke',
    biography: 'My bio',
    twitter: '@Cool',
    friends: [
      { name: 'Jenny' }
    ]
  }

  it('should display header', () => {
    const profile = shallow(<Profile {...props} />)
    expect(profile.find(Header)).toBePresent()
  })

  it('should display friends', () => {
    const profile = shallow(<Profile {...props} />)
    expect(profile.find(FriendsList)).toBePresent()
  })
})
