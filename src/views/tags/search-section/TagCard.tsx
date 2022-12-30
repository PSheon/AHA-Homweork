// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Types
import type { ITag } from 'src/types/tagTypes'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(() => ({
  width: '150px',
  display: 'flex',
  flexDirection: 'column'
}))

// ** Styled Avatar component
const StyledAvatar = styled(Box)<BoxProps>(({}) => ({
  position: 'relative',
  width: 150,
  height: 150,
  borderRadius: '10px',
  background: '#262626'
}))

interface Props {
  tag: ITag
}

const TagCard = (props: Props) => {
  // ** Props
  const { tag } = props

  return (
    <StyledRootBox>
      <StyledAvatar>
        <Box
          sx={{
            maxWidth: '136px',
            position: 'absolute',
            p: 2,
            left: '10px',
            bottom: '14px',
            borderRadius: '8px',
            border: theme => `4px solid ${theme.palette.common.white}`
          }}
        >
          <Typography variant='body1' noWrap sx={{ fontSize: '24px', fontWeight: 700 }}>
            {tag.name}
          </Typography>
        </Box>
      </StyledAvatar>

      <Box sx={{ mt: '10px' }}>
        <Typography variant='body1' noWrap sx={{ fontSize: '14.9px' }}>
          {tag.name}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          noWrap
          sx={{ fontSize: '11.175px' }}
        >{`${tag.count} Results`}</Typography>
      </Box>
    </StyledRootBox>
  )
}

export default TagCard
