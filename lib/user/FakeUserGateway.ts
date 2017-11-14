import User from './User'

export async function findById (id: string) : Promise<User> {
  return {
    name: 'Mr Luke Fake',
    email: 'luke@example.com',
    biography: 'Coool',
    twitter: '@Cool'
  }
}
