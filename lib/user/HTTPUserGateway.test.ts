import * as HTTPUserGateway from './HTTPUserGateway'
import { mockExecute } from '../api/Client'

const API_ORIGIN = process.env.API_ORIGIN

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
