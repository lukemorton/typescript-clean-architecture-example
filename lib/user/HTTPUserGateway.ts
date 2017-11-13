import { execute } from '../api/Client'
import User from './User'

const API_ORIGIN = process.env.API_ORIGIN

export async function findById (userId: string) : Promise<User> {
  const user = await execute('findUserById', { userId })
  return user.basicInfo
}
