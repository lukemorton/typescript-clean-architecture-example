import * as React from 'react'
import { shallow } from 'enzyme'
import Page from './Page'

describe('<Page />', () => {
  it('should use children', () => {
    const page = shallow(<Page title='title'>Cool</Page>)
    expect(page).toIncludeText('Cool')
  })
})
