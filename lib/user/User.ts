export default interface User {
  name: string
  email: string
  biography: string
  twitter: string,
  friends: Array<User>
}
