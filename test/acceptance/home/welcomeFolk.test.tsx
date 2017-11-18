import * as React from 'react'
import { mountPage } from 'republic/test-next'
import Home from '../../../pages/home/index'

describe('Welcome folk', () => {
  describe('when user visits', () => {
    test('they are welcomed', async () => {
      const page = await mountPage(Home, 'home#index')
      expect(page).toIncludeText('Welcome')
    })
  })
})
