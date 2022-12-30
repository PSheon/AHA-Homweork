// ** Utils Imports
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

// ** Services Imports
import { getUsers, getInfiniteUsers } from 'src/services/api/user.service'

// ** Types Imports
import type { GetUsersProps, GetInfiniteUsersProps, GetUsersResponse } from 'src/types/userTypes'

export const useUsersQuery = (params: GetUsersProps) =>
  useQuery<GetUsersResponse>(['users', { params }], () => getUsers(params))

export const useInfiniteUsersQuery = (params: GetInfiniteUsersProps) =>
  useInfiniteQuery<GetUsersResponse>(
    ['users', params.type],
    ({ pageParam }) =>
      getInfiniteUsers({
        ...params,
        page: pageParam
      }),
    {
      getNextPageParam: lastPage => (lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined)
    }
  )
