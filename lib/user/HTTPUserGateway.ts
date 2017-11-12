import 'isomorphic-fetch'
import User from './User'

const API_ORIGIN = process.env.API_ORIGIN

export async function findById (id: string) : Promise<User> {
  const res = await fetch(`${API_ORIGIN}/api/users/${id}`)
  const { name, email } = await res.json()
  return new User(name, email)
}
