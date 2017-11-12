import * as HTTPUserGateway from './HTTPUserGateway'
import * as nock from 'nock'

const API_ORIGIN = process.env.API_ORIGIN

describe('HTTPUserGateway', () => {
  describe('when finding by id', () => {
    test('user has name', async () => {
      nock(API_ORIGIN).get('/api/users/guid').reply(200, { name: 'Jim', email: 'jim@example.com' })
      const user = await HTTPUserGateway.findById('guid')
      expect(user.name).toBe('Jim')
      expect(user.email).toBe('jim@example.com')
    })
  })
})
