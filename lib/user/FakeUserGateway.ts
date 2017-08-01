import User from './User'

export default {
  async findById (id: string) : Promise<User> {
    return new User('Luke (fake!)', 'luke@cool.com')
  }
}
