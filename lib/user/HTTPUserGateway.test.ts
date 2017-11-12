import * as HTTPUserGateway from './HTTPUserGateway'
import { mockExecute } from '../api/Client'

describe('HTTPUserGateway', () => {
  describe('when finding by id', () => {
    test('user has name', async () => {
      mockExecute('findUserById', { userId: 'guid' }).reply(200, { name: 'Jim', email: 'jim@example.com' })
      const user = await HTTPUserGateway.findById('guid')
      expect(user.name).toBe('Jim')
      expect(user.email).toBe('jim@example.com')
    })
  })
})
