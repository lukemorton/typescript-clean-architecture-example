import 'isomorphic-fetch'
import User from './User'

export default {
  async findById (id: string) : Promise<User> {
    await fetch('https://google.com')
    return new User('Luke', 'luke@cool.com')
  }
}
