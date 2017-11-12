import * as HTTPUserGateway from './HTTPUserGateway'
import mockExecute from '../../test/support/mockExecute'

describe('HTTPUserGateway', () => {
  const fakeUser = { basicInfo: { name: 'Jim', email: 'jim@example.com' } }

  describe('when finding by id', () => {
    test('user has name', async () => {
      mockExecute('findUserById', { userId: 'guid' }).reply(200, fakeUser)
      const user = await HTTPUserGateway.findById('guid')
      expect(user.name).toBe('Jim')
      expect(user.email).toBe('jim@example.com')
    })
  })
})
