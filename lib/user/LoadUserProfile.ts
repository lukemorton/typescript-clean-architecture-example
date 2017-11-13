import UserGateway from './UserGateway'

type Request = {
  userId: string
}

type Response = {
  user: {
    name: string,
    biography: string
  }
}

export default async function LoadUserProfile (gateway: UserGateway, req: Request) : Promise<Response> {
  const user = await gateway.findById(req.userId)
  return { user }
}
