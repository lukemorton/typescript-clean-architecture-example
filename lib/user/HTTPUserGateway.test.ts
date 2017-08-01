import HTTPUserGateway from './HTTPUserGateway'

describe('HTTPUserGateway', () => {
  describe('when finding by id', () => {
    test('user has name', async () => {
      const user = await HTTPUserGateway.findById('guid')
      expect(user.name).toBe('Luke')
    })
  })
})
