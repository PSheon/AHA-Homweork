// ** Utils Imports
import axios from 'axios'

// ** Types Imports
import type { ITag } from 'src/types/tagTypes'

export const getTags = async (): Promise<ITag[]> => {
  const { data } = await axios<ITag[]>({
    method: 'GET',
    url: 'https://avl-frontend-exam.herokuapp.com/api/tags'
  })

  return data
}
