// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// ** Components Imports
import FollowerList from 'src/views/home/followerListSection/FollowerList'
import FollowingList from 'src/views/home/followerListSection/FollowingList'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  marginRight: theme.spacing(-12),
  width: '375px',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

const FollowerListSection = () => {
  // ** State
  const [tabId, setTabId] = useState<string>('followers')

  // ** Logics
  const handleChangeTabId = (event: SyntheticEvent, newValue: string) => {
    setTabId(newValue)
  }

  return (
    <StyledRootBox>
      <TabContext value={tabId}>
        <TabList variant='fullWidth' onChange={handleChangeTabId}>
          <Tab value='followers' label='Followers' />
          <Tab value='following' label='Following' />
        </TabList>
        <TabPanel value='followers' sx={{ overflowY: 'scroll', px: 4, py: 8 }}>
          <FollowerList />
        </TabPanel>
        <TabPanel value='following' sx={{ overflowY: 'scroll', px: 4, py: 8 }}>
          <FollowingList />
        </TabPanel>
      </TabContext>
    </StyledRootBox>
  )
}

export default FollowerListSection
