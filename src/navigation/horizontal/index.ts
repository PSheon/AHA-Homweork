// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
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
