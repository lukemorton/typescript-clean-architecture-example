import * as React from 'react'
import { mountPage } from 'republic/test-next'
import * as nock from 'nock'
import UserProfile from './profile'

const API_ORIGIN = process.env.API_ORIGIN

describe('UserProfile', () => {
  describe('when user views the page', () => {
    test('user can see user name', async () => {
      nock(API_ORIGIN).get('/api/users/guid').reply(200, { name: 'Luke' })
      const page = await mountPage(UserProfile, 'users#profile')
      expect(page).toIncludeText('Luke')
    })
  })
})
