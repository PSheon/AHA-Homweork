// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Components Imports
import TagCard from 'src/views/tags/search-section/TagCard'

// ** Services Imports
import { useTagsQuery } from 'src/services/queries/tag.query'

// ** Types
import type { ITag } from 'src/types/tagTypes'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'scroll',
  padding: '122px 221px 24px 373px',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 25px'
  }
}))

const SearchSection = () => {
  // ** Hooks
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
  const { isLoading: isQueryLoading, isError: isQueryError, data: queryData } = useTagsQuery()
  const tags: ITag[] = queryData || []

  return (
    <StyledRootBox>
      {!isDesktop && (
        <Box
          sx={{
            height: '50px',
            ml: '-8px',
            mb: '32px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
          component={Link}
          href='/'
        >
          <IconButton sx={{ mr: '8px' }}>
            <Icon icon='material-symbols:arrow-back-ios-new-rounded' fontSize={26} />
          </IconButton>
          <Typography variant='body1' sx={{ fontSize: '24px', mt: '0 !important' }}>
            Home Page
          </Typography>
        </Box>
      )}

      <Typography
        variant='body1'
        sx={{
          fontSize: {
            xs: '24px',
            sm: '30px'
          },
          mb: '24px'
        }}
      >
        Tags
      </Typography>

      <Grid container spacing={6}>
        {isQueryError && (
          <Grid item xs={12}>
            <Typography>something went wrong</Typography>
          </Grid>
        )}
        {tags.length ? (
          tags.map(tag => (
            <Grid item key={`tag-list-${tag.id}`}>
              <TagCard tag={tag} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            No Tags
          </Grid>
        )}
        {isQueryLoading &&
          [...Array(15).keys()].map(sIndex => (
            <Grid key={`users-models-skeleton-${sIndex}`} item>
              <Stack spacing={4}>
                <Skeleton variant='rounded' width={150} height={150} />
                <Skeleton variant='rounded' width={100} height={20} />
                <Skeleton variant='rounded' width={80} height={10} />
              </Stack>
            </Grid>
          ))}
      </Grid>
    </StyledRootBox>
  )
}

export default SearchSection
