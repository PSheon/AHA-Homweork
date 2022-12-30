// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Components Imports
import SearchSection from 'src/views/tags/search-section'

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  margin: theme.spacing(-6)
}))

const TagsPage = () => {
  return (
    <StyledRootBox>
      <SearchSection />
    </StyledRootBox>
  )
}

export default TagsPage
