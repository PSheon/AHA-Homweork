// ** React Imports
import { Dispatch, SetStateAction } from 'react'

// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
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
const StyledRootBox = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'scroll'
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
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
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
    <StyledRootBox
      sx={{
        width: {
          cs: '100%',
          sm: '1065px'
        },
        padding: {
          xs: '16px',
          sm: '92px 130px 24px 210px'
        }
      }}
    >
      {!isDesktop && (
        <Box
          sx={{
            height: '70px',
            ml: '-8px',
            mb: '30px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <IconButton onClick={handleGoBack} sx={{ mr: '6px' }}>
            <Icon icon='material-symbols:arrow-back-ios-new-rounded' fontSize={26} />
          </IconButton>
          <Typography variant='body1' sx={{ fontSize: '24px', mt: '0 !important' }}>
            Home Page
          </Typography>
        </Box>
      )}
      {isDesktop ? (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: '-52px' }}>
          <IconButton onClick={handleGoBack} sx={{ mr: '15px' }}>
            <Icon icon='material-symbols:arrow-back-ios-new-rounded' fontSize={26} />
          </IconButton>
          <Typography
            variant='body1'
            sx={{
              fontSize: '30px',
              mt: '0 !important'
            }}
          >
            Results
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant='body1'
            sx={{
              fontSize: '24px',
              mt: '0 !important'
            }}
          >
            Results
          </Typography>
        </Box>
      )}

      <Grid container spacing={8} sx={{ pt: '24px' }}>
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
              {isDesktop ? (
                <Stack spacing={4}>
                  <Skeleton variant='rectangular' width={219} height={146} />
                  <Skeleton variant='rectangular' width={100} height={20} />
                  <Skeleton variant='rectangular' width={80} height={10} />
                </Stack>
              ) : (
                <Stack spacing={2}>
                  <Skeleton variant='rectangular' width={335} height={222.67} />
                  <Skeleton variant='rectangular' width={90} height={25} />
                  <Skeleton variant='rectangular' width={70} height={20} />
                </Stack>
              )}
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
