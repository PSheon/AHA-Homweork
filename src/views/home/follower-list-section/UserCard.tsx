// ** MUI Imports
import { styled } from '@mui/material/styles'
import Avatar, { AvatarProps } from '@mui/material/Avatar'
import Stack, { StackProps } from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Types
import type { IUser } from 'src/types/userTypes'

// ** Styled RootStack component
const StyledRootStack = styled(Stack)<StackProps>(() => ({
  height: '45px'
}))

// ** Styled Avatar component
const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  width: 40,
  height: 40,
  border: `1px solid ${theme.palette.common.white}`
}))

interface Props {
  user: IUser
}

const UserCard = (props: Props) => {
  // ** Props
  const { user } = props

  return (
    <StyledRootStack direction='row' alignItems='center'>
      <Box>
        <StyledAvatar src={user.avater} alt={user.name} variant='rounded'>
          {user.name.slice(0, 1)}
        </StyledAvatar>
      </Box>
      <Box sx={{ px: 4 }}>
        <Typography variant='body1'>{user.name}</Typography>
        <Typography variant='body2' color='text.secondary'>{`@${user.username}`}</Typography>
      </Box>
      <Stack direction='row' justifyContent='flex-end' sx={{ ml: 'auto' }}>
        <Button variant={user.isFollowing ? 'contained' : 'outlined'} sx={{ px: 2, borderRadius: '20px' }}>
          <Typography sx={{ fontSize: '12px' }} color='secondary'>
            {user.isFollowing ? 'Following' : 'Follow'}
          </Typography>
        </Button>
      </Stack>
    </StyledRootStack>
  )
}

export default UserCard
