import * as React from 'react'
import { shallow } from 'enzyme'
import Profile from './Profile'

describe('<Profile />', () => {
  let profile

  beforeEach(() => {
    profile = shallow(<Profile name='Luke' biography='My bio' twitter='@Cool' />)
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
})
