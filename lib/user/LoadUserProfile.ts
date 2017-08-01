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
  return {
    user: await gateway.findById(req.id)
  }
}
