import LoadUserProfile from './LoadUserProfile'
import * as FakeUserGateway from './FakeUserGateway'

describe('LoadUserProfile', () => {
  describe('when loading profile by id', () => {
    test('user has name', async () => {
      const { user } = await LoadUserProfile(FakeUserGateway, { id: 'guid' })
      expect(user.name).toBe('Mr Luke Fake')
    })
  })
})
