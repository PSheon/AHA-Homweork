// ** MUI Imports
import { styled } from '@mui/material/styles'
import Avatar, { AvatarProps } from '@mui/material/Avatar'
import Stack, { StackProps } from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Types
import type { IUser } from 'src/types/userTypes'

// ** Styled RootStack component
const StyledRootStack = styled(Stack)<StackProps>(() => ({
  // height: '45px'
}))

// ** Styled Avatar component
const StyledAvatar = styled(Avatar)<AvatarProps>(() => ({
  width: 219,
  height: 146
}))

interface Props {
  user: IUser
}

const UserCard = (props: Props) => {
  // ** Props
  const { user } = props

  return (
    <StyledRootStack direction='column' spacing={4}>
      <Box>
        <StyledAvatar src={user.avater} alt={user.name} variant='square'>
          {user.name.slice(0, 1)}
        </StyledAvatar>
      </Box>
      <Box>
        <Typography variant='body1'>{user.name}</Typography>
        <Typography variant='body2' color='text.secondary'>{`@${user.username}`}</Typography>
      </Box>
    </StyledRootStack>
  )
}

export default UserCard
