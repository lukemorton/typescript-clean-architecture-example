import User from './User'

export async function findById (id: string) : Promise<User> {
  return new User('Mr Luke Fake', 'luke@example.com')
}
