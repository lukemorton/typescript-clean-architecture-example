import * as HTTPUserGateway from './HTTPUserGateway'
import mockExecute from '../../test/support/mockExecute'

describe('HTTPUserGateway', () => {
  const fakeUser = {
    basicInfo: { name: 'Jim', email: 'jim@example.com' },
    friends: []
  }

  describe('when finding by id', () => {
    describe('and user exists', () => {
      let user

      beforeEach(async () => {
        mockExecute('findUserById', { userId: 'guid' }).reply(200, fakeUser)
        user = await HTTPUserGateway.findById('guid')
      })

      test('user has name', () => {
        expect(user.name).toEqual('Jim')
      })

      test('user has email', () => {
        expect(user.email).toEqual('jim@example.com')
      })

      test('user has friends', () => {
        expect(user.friends).toEqual([])
      })
    })

    describe('and user does not exist', () => {
      test('nothing is returned', async () => {
        mockExecute('findUserById', { userId: 'not-found' }).reply(404)
        const user = await HTTPUserGateway.findById('not-found')
        expect(user).not.toBeDefined()
      })
    })
  })
})
