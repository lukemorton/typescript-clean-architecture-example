import User from './User'

export async function findById (id: string) : Promise<User> {
  return new User('Luke (fake!)', 'luke@cool.com')
}
