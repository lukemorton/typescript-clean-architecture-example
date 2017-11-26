import * as React from 'react'
import { mount } from 'enzyme'
import Page from './Page'

describe('<Page />', () => {
  it('should use children', () => {
    const page = mount(<Page title='title'>Cool</Page>)
    expect(page).toIncludeText('Cool')
  })
})
