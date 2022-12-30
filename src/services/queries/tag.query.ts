// ** Utils Imports
import { useQuery } from '@tanstack/react-query'

// ** Services Imports
import { getTags } from 'src/services/api/tag.service'

// ** Types Imports
import type { ITag } from 'src/types/tagTypes'

export const useTagsQuery = () => useQuery<ITag[]>(['tags'], () => getTags())
