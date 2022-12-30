// ** MUI Imports
import { styled } from '@mui/material/styles'
import Avatar, { AvatarProps } from '@mui/material/Avatar'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Types
import type { IUser } from 'src/types/userTypes'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column'
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
    <StyledRootBox>
      <Box>
        <StyledAvatar src={user.avater} alt={user.name} variant='square'>
          {user.name.slice(0, 1)}
        </StyledAvatar>
      </Box>
      <Box sx={{ mt: '12px' }}>
        <Typography variant='body1' sx={{ fontSize: '14.9px' }}>
          {user.name}
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ fontSize: '11.175px' }}
        >{`by ${user.username}`}</Typography>
      </Box>
    </StyledRootBox>
  )
}

export default UserCard
