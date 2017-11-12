import UserGateway from './UserGateway'

type Request = {
  id: string
}

type Response = {
  user: {
    name: string
  }
}

export default async function LoadUserProfile (gateway: UserGateway, req: Request) : Promise<Response> {
  const user = await gateway.findById(req.id)
  return { user }
}
