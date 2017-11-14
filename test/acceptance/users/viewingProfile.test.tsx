import * as React from 'react'
import { mountPage } from 'republic/test-next'
import mockExecute from '../../support/mockExecute'
import UserProfile from '../../../pages/users/profile'

describe('Viewing profile', () => {
  const userId = 'uniq-guid'
  const fakeUser = { basicInfo: { name: 'Luke', email: 'luke@example.com' } }

  describe('when user views the page', () => {
    test('user can see user name', async () => {
      mockExecute('findUserById', { userId }).reply(200, fakeUser)
      const page = await mountPage(UserProfile, 'users#profile', { userId })
      expect(page).toIncludeText(fakeUser.basicInfo.name)
    })
  })
})
