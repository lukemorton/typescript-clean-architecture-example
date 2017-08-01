import LoadUserProfile from './LoadUserProfile'
import FakeUserGateway from './FakeUserGateway'

describe('LoadUserProfile', () => {
  describe('when loading profile by id', () => {
    test('user has name', async () => {
      const { user } = await LoadUserProfile(FakeUserGateway, { id: 'guid' })
      expect(user.name).toBe('Luke (fake!)')
    })
  })
})
