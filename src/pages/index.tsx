// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Layout Imports
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Components Imports
import SearchSection from 'src/views/home/search-section'
import FollowerListSection from 'src/views/home/follower-list-section'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  width: '100%'
}))

const HomePage = () => {
  return (
    <StyledRootBox>
      <SearchSection />
      <FollowerListSection />
    </StyledRootBox>
  )
}

HomePage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default HomePage
