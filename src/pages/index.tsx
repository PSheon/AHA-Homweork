// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Components Imports
import SearchSection from 'src/views/home/search-section'
import FollowerListSection from 'src/views/home/follower-list-section'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  width: '100%',
  margin: theme.spacing(-6)
}))

const HomePage = () => {
  return (
    <StyledRootBox>
      <SearchSection />
      <FollowerListSection />
    </StyledRootBox>
  )
}

export default HomePage
