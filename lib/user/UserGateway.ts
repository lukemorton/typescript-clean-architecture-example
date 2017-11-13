import User from './User'

export default interface UserGateway {
  findById (string): Promise<User>
}
