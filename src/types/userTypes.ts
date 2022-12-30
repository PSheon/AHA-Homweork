export interface GetUsersProps {
  type: 'all' | 'friends'
  page: number
  pageSize: number
}

export interface GetInfiniteUsersProps {
  mode: 'search' | 'all' | 'friends'
  type: 'all' | 'friends'
  page: number
  pageSize?: number
  keyword?: string
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
