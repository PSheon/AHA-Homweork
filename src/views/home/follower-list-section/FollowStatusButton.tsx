// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface Props {
  isFollowing: boolean
}

const FollowStatusButton = (props: Props) => {
  // ** Props
  const { isFollowing } = props

  if (isFollowing) {
    return (
      <Button variant='contained' sx={{ px: '10px', py: '8px', borderRadius: '20px' }}>
        <Typography sx={{ fontSize: '12px', fontWeight: 600, textTransform: 'capitalize' }} color='common.black'>
          Following
        </Typography>
      </Button>
    )
  }

  return (
    <Button variant='outlined' sx={{ px: '10px', py: '8px', borderRadius: '20px', backgroundColor: 'common.black' }}>
      <Typography sx={{ fontSize: '12px', fontWeight: 400, textTransform: 'capitalize' }} color='common.white'>
        Follow
      </Typography>
    </Button>
  )
}

export default FollowStatusButton
