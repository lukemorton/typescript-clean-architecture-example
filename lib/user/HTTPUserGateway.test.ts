import HTTPUserGateway from './HTTPUserGateway'
import * as nock from 'nock'

describe('HTTPUserGateway', () => {
  describe('when finding by id', () => {
    test('user has name', async () => {
      nock('https://google.com').get('/').reply(200, 'Jim')
      const user = await HTTPUserGateway.findById('guid')
      expect(user.name).toBe('Jim')
    })
  })
})
