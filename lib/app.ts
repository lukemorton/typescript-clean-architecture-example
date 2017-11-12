import Republic, { route } from 'republic/next'
import { LoadUserProfile } from './user/'

export default new Republic(
  route.page('/', 'users#profile', async () => {
    return await LoadUserProfile({ id: 'guid' })
  })
)
