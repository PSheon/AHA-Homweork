// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Stack, { StackProps } from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Slider from '@mui/material/Slider'

// ** Components Imports
import ResultSection from 'src/views/home/result-section'

const marks = [
  {
    value: 1,
    label: '3'
  },
  {
    value: 2,
    label: '6'
  },
  {
    value: 3,
    label: '9'
  },
  {
    value: 4,
    label: '12'
  },
  {
    value: 5,
    label: '15'
  },
  {
    value: 6,
    label: '50'
  }
]

// ** Styled RootStack component
const StyledRootStack = styled(Stack)<StackProps>(({ theme }) => ({
  flexGrow: '1',
  height: '100vh',
  overflowY: 'scroll',
  padding: theme.spacing(20, 24),
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const SearchSection = () => {
  // ** States
  const [pageSizeIndex, setPageSizeIndex] = useState(3)
  const [keyword, setKeyword] = useState('')
  const [resultOpen, setResultOpen] = useState(false)

  // ** Logics
  const handleSearch = () => {
    setResultOpen(true)
  }
  const formatPageSize = (pageIndex: number): number => {
    switch (pageIndex) {
      case 6:
        return 50
      case 5:
        return 15
      case 4:
        return 12
      case 3:
        return 9
      case 2:
        return 6
      case 1:
      default:
        return 3
    }
  }

  return (
    <StyledRootStack flexDirection='column' spacing={12}>
      {resultOpen ? (
        <ResultSection pageSize={formatPageSize(pageSizeIndex)} keyword={keyword} setResultOpen={setResultOpen} />
      ) : (
        <Fragment>
          <Typography variant='body1'>Search</Typography>

          <TextField autoFocus value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='keyword' />

          <Divider />

          <Typography variant='body1'># of results per page</Typography>

          <Box>
            <Slider
              size='medium'
              value={pageSizeIndex}
              valueLabelDisplay='off'
              min={1}
              max={6}
              onChange={(e, pageIndex) => setPageSizeIndex(pageIndex as number)}
              marks={marks}
            />
          </Box>

          <Box sx={{ width: '343px', marginTop: 'auto !important' }}>
            <Button variant='contained' fullWidth onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </Fragment>
      )}
    </StyledRootStack>
  )
}

export default SearchSection
