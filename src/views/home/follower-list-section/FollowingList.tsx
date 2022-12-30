// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

// ** Components Imports
import UserCard from 'src/views/home/follower-list-section/UserCard'

// ** Services Imports
import { useInfiniteUsersQuery } from 'src/services/queries/user.query'

// ** Utils Imports
import useInfiniteScroll from 'react-infinite-scroll-hook'

// ** Types
import type { IUser } from 'src/types/userTypes'

const FollowingList = () => {
  // ** Hooks
  const {
    fetchNextPage,
    hasNextPage,
    isFetching: isQueryLoading,
    isError: isQueryError,
    data: queryData
  } = useInfiniteUsersQuery({ type: 'friends', page: 1 })
  const [sentryRef] = useInfiniteScroll({
    loading: isQueryLoading,
    hasNextPage: hasNextPage ?? true,
    onLoadMore: () => {
      fetchNextPage()
    },
    disabled: !!isQueryError,
    rootMargin: '0px 0px 400px 0px'
  })
  const users = queryData?.pages.reduce<IUser[]>((acc, curr) => [...acc, ...curr.data], []) || []

  return (
    <Grid container spacing={4}>
      {isQueryError && (
        <Grid item xs={12}>
          <Typography>something went wrong</Typography>
        </Grid>
      )}
      {users.length
        ? users.map((user: IUser) => (
            <Grid item key={`user-list-${user.id}`} xs={12}>
              <UserCard user={user} />
            </Grid>
          ))
        : !hasNextPage && (
            <Grid item xs={12}>
              No Users
            </Grid>
          )}
      {(isQueryLoading || hasNextPage) && (
        <Fragment>
          <Grid ref={sentryRef} item xs={12}>
            <Skeleton variant='rounded' height={45} />
          </Grid>
          {[...Array(14).keys()].map(sIndex => (
            <Grid key={`users-models-skeleton-${sIndex}`} item xs={12}>
              <Skeleton variant='rounded' height={45} />
            </Grid>
          ))}
        </Fragment>
      )}
    </Grid>
  )
}

export default FollowingList
