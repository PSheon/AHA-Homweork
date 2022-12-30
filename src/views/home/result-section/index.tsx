// ** React Imports
import { Dispatch, SetStateAction } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Components Imports
import UserCard from 'src/views/home/result-section/UserCard'

// ** Utils Imports
import { useQueryClient } from '@tanstack/react-query'

// ** Services Imports
import { useInfiniteUsersQuery } from 'src/services/queries/user.query'

// ** Types
import type { IUser } from 'src/types/userTypes'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'scroll',
  padding: theme.spacing(24, 16)
}))

interface Props {
  pageSize: number
  keyword?: string
  setResultOpen: Dispatch<SetStateAction<boolean>>
}

const SearchSection = (props: Props) => {
  // ** Props
  const { pageSize, keyword, setResultOpen } = props

  // ** Hooks
  const queryClient = useQueryClient()
  const {
    fetchNextPage,
    hasNextPage,
    isFetching: isQueryLoading,
    isError: isQueryError,
    data: queryData
  } = useInfiniteUsersQuery({ mode: 'search', type: 'all', page: 1, pageSize, keyword })
  const users = queryData?.pages.reduce<IUser[]>((acc, curr) => [...acc, ...curr.data], []) || []

  // ** Logics
  const handleGoBack = () => {
    queryClient.resetQueries(['users', 'search'])
    setResultOpen(false)
  }
  const handleLoadMore = () => {
    fetchNextPage()
  }

  return (
    <StyledRootBox>
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handleGoBack}
          sx={{
            position: 'absolute',
            top: 0,
            left: '-2rem',
            color: 'grey.100'
          }}
        >
          <Icon icon='material-symbols:arrow-back-ios-new-rounded' fontSize={26} />
        </IconButton>
        <Typography variant='body1'>Results</Typography>
      </Box>

      <Grid container spacing={4}>
        {isQueryError && (
          <Grid item xs={12}>
            <Typography>something went wrong</Typography>
          </Grid>
        )}
        {users.length ? (
          users.map(user => (
            <Grid item key={`user-search-list-${user.id}`}>
              <UserCard user={user} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            No Users found
          </Grid>
        )}
        {isQueryLoading &&
          [...Array(15).keys()].map(sIndex => (
            <Grid key={`users-skeleton-${sIndex}`} item>
              <Stack spacing={4}>
                <Skeleton variant='rounded' width={219} height={146} />
                <Skeleton variant='rounded' width={100} height={20} />
                <Skeleton variant='rounded' width={80} height={10} />
              </Stack>
            </Grid>
          ))}
        {hasNextPage && (
          <Grid item xs={12}>
            <Box sx={{ width: '343px' }}>
              <Button fullWidth variant='contained' onClick={handleLoadMore}>
                More
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </StyledRootBox>
  )
}

export default SearchSection
