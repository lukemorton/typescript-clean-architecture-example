import 'isomorphic-fetch'
import User from './User'

export async function findById (id: string) : Promise<User> {
  const res = await fetch('https://google.com')
  const name = (await res.text()).slice(0, 10)
  return new User(name, 'luke@cool.com')
}
