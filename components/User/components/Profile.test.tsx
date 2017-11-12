import * as React from 'react'
import { shallow } from 'enzyme'
import Profile from './Profile'

describe('<Profile />', () => {
  it('should display name', () => {
    expect(shallow(<Profile name='Luke' />)).toIncludeText('Name: Luke')
  })
})
