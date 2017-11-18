import Republic, { route } from 'republic/next'
import { LoadUserProfile } from './user/'

export default new Republic(
  route.page('/', 'home#index'),
  route.page('/:userId', 'users#profile', async ({ params }) => {
    return await LoadUserProfile({ userId: params.userId })
  })
)
