import * as React from 'react'
import { mount } from 'enzyme'
import * as nock from 'nock'
import IndexPage from '../../pages/index'

describe('IndexPage', () => {
  describe('when user views the page', () => {
    test('user can see user name', async () => {
      nock('https://google.com').get('/').reply(200, 'Luke from Google')
      const props = await IndexPage.getInitialProps()
      const page = mount(<IndexPage {...props} />)
      expect(page).toIncludeText('Luke')
    })
  })
})
