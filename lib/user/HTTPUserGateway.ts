import { execute } from '../api/Client'
import User from './User'

const API_ORIGIN = process.env.API_ORIGIN

export async function findById (userId: string) : Promise<User> {
  const user = await execute('findUserById', { userId })

  if (user) {
    return { ...user.basicInfo, friends: user.friends }
  }
}
