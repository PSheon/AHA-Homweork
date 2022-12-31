// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => [
  {
    title: 'Home',
    path: '/',
    icon: 'mdi:home-outline'
  },
  {
    title: 'Tags',
    path: '/tags',
    icon: 'mdi:email-outline'
  }
]

export default navigation
