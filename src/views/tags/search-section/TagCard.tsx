// ** MUI Imports
import { styled } from '@mui/material/styles'
import Avatar, { AvatarProps } from '@mui/material/Avatar'
import Stack, { StackProps } from '@mui/material/Stack'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Types
import type { ITag } from 'src/types/tagTypes'

// ** Styled RootStack component
const StyledRootStack = styled(Stack)<StackProps>(() => ({
  width: '150px'
}))

// ** Styled Avatar component
const StyledAvatar = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: 150,
  height: 150,
  borderRadius: '10px',
  background: theme.palette.background.paper
}))

interface Props {
  tag: ITag
}

const TagCard = (props: Props) => {
  // ** Props
  const { tag } = props

  return (
    <StyledRootStack>
      <StyledAvatar>
        <Box
          sx={{
            maxWidth: '136px',
            position: 'absolute',
            p: 2,
            left: '6px',
            bottom: '6px',
            borderRadius: '8px',
            border: theme => `2px solid ${theme.palette.common.white}`
          }}
        >
          <Typography variant='body1' noWrap>
            {tag.name}
          </Typography>
        </Box>
      </StyledAvatar>

      <Box>
        <Typography variant='body1' noWrap>
          {tag.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' noWrap>{`${tag.count} Results`}</Typography>
      </Box>
    </StyledRootStack>
  )
}

export default TagCard
