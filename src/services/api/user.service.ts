// ** Utils Imports
import axios from 'axios'

// ** Types Imports
import type { GetUsersProps, GetInfiniteUsersProps, GetUsersResponse } from 'src/types/userTypes'

export const getUsers = async (params: GetUsersProps): Promise<GetUsersResponse> => {
  const { data } = await axios<GetUsersResponse>({
    method: 'GET',
    url: `https://avl-frontend-exam.herokuapp.com/api/users/${params.type}`,
    params: {
      page: params.page,
      pageSize: params.pageSize
    }
  })

  return data
}

export const getInfiniteUsers = async (params: GetInfiniteUsersProps): Promise<GetUsersResponse> => {
  const { data } = await axios<GetUsersResponse>({
    method: 'GET',
    url: `https://avl-frontend-exam.herokuapp.com/api/users/${params.type}`,
    params: {
      page: params.page,
      pageSize: params.pageSize ?? 15,
      ...(params.keyword && {
        keyword: params.keyword
      })
    }
  })

  return data
}
