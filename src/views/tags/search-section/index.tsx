// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

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
  padding: theme.spacing(24, 60)
}))

const SearchSection = () => {
  // ** Hooks
  const { isLoading: isQueryLoading, isError: isQueryError, data: queryData, error: queryError } = useTagsQuery()
  const tags: ITag[] = queryData || []

  return (
    <StyledRootBox>
      <Typography variant='body1'>Tags</Typography>

      <Grid container spacing={4}>
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
