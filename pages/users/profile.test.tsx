import * as React from 'react'
import { mountPage } from 'republic/test-next'
import * as nock from 'nock'
import UserProfile from './profile'

describe('UserProfile', () => {
  describe('when user views the page', () => {
    test('user can see user name', async () => {
      nock('https://google.com').get('/').reply(200, 'Luke from Google')
      const page = await mountPage(UserProfile, 'users#profile')
      expect(page).toIncludeText('Luke')
    })
  })
})
