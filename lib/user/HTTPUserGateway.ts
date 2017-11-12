import { execute } from '../api/Client'
import User from './User'

const API_ORIGIN = process.env.API_ORIGIN

export async function findById (userId: string) : Promise<User> {
  const { name, email } = await execute('findUserById', { userId })
  return new User(name, email)
}
