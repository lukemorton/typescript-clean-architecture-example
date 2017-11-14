import * as React from 'react'
import { shallow } from 'enzyme'
import Profile from './Profile'
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

  let profile

  beforeEach(() => {
    profile = shallow(<Profile {...props} />)
  })

  it('should display name', () => {
    expect(profile).toIncludeText('Luke')
  })

  it('should display biography', () => {
    expect(profile).toIncludeText('My bio')
  })

  it('should display twitter', () => {
    expect(profile).toIncludeText('@Cool')
  })

  it('should display friends', () => {
    expect(profile).toContainReact(<FriendsList friends={props.friends} />)
  })
})
