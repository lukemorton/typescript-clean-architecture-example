import * as React from 'react'
import { mount } from 'enzyme'
import IndexPage from '../../pages/index'

describe('IndexPage', () => {
  describe('when user views the page', () => {
    test('user can see user name', async () => {
      const props = await IndexPage.getInitialProps()
      const page = mount(<IndexPage {...props} />)
      expect(page).toIncludeText('Luke')
    })
  })
})
