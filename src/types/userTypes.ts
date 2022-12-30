export interface GetUsersProps {
  type: 'all' | 'friends'
  page: number
  pageSize: number
}

export interface GetInfiniteUsersProps {
  type: 'all' | 'friends'
  page: number
}

export interface GetUsersResponse {
  total: number
  totalPages: number
  page: number
  pageSize: number
  data: IUser[]
}

export type IUser = {
  id: string
  name: string
  username: string
  avater: string
  isFollowing: boolean
}
