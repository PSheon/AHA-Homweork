// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
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

// ** Styled RootBox component
const StyledRootBox = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflowY: 'scroll',
  padding: '54px 130px 24px 158px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))
const StyledTextField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FF9B33'
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#FF9B33'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF9B33'
    }
  }
})

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
    <StyledRootBox>
      {resultOpen ? (
        <ResultSection pageSize={formatPageSize(pageSizeIndex)} keyword={keyword} setResultOpen={setResultOpen} />
      ) : (
        <Fragment>
          <Typography variant='body1' sx={{ fontSize: '24px', mb: '20px' }}>
            Search
          </Typography>

          <StyledTextField
            autoFocus
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder='keyword'
            sx={{ mt: '0', mb: '30px' }}
          />

          <Divider />

          <Typography variant='body1' sx={{ mt: '30px', fontSize: '24px' }}>
            # of results per page
          </Typography>

          <Typography variant='body1' sx={{ mt: '20px', fontSize: '16px' }}>
            <Typography component='span' sx={{ fontWeight: 700, fontSize: '48px', mr: '10px' }}>
              {formatPageSize(pageSizeIndex)}
            </Typography>
            results
          </Typography>

          <Box sx={{ mb: '30px' }}>
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

          <Divider />

          <Box sx={{ width: '343px', marginTop: '335px !important' }}>
            <Button variant='contained' fullWidth onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </Fragment>
      )}
    </StyledRootBox>
  )
}

export default SearchSection
