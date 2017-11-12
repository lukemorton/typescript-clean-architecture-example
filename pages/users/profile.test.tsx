import * as React from 'react'
import { mountPage } from 'republic/test-next'
import mockExecute from '../../test/support/mockExecute'
import UserProfile from './profile'

describe('UserProfile', () => {
  const fakeUser = { basicInfo: { name: 'Luke', email: 'luke@example.com' } }

  describe('when user views the page', () => {
    test('user can see user name', async () => {
      mockExecute('findUserById', { userId: 'guid' }).reply(200, fakeUser)
      const page = await mountPage(UserProfile, 'users#profile')
      expect(page).toIncludeText('Luke')
    })
  })
})
