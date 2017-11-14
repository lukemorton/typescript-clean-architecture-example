import UserGateway from './UserGateway'
import User from './User'

type Request = {
  userId: string
}

type Response = {
  user: User
}

export default async function LoadUserProfile (gateway: UserGateway, req: Request): Promise<Response> {
  const user = await gateway.findById(req.userId)
  return { user }
}
