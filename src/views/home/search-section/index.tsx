// ** React Imports
import { useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

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
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))
const StyledTextField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FF9B33'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '3px'
    },
    '&:hover fieldset': {
      borderColor: '#FF9B33'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF9B33'
    }
  }
})
const MobileNavBar = styled(Box)<BoxProps>(() => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '66px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(24, 24, 24, 0.2)',
  boxShadow: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
  backDrop: 'blur(27.1828px)'
}))

const SearchSection = () => {
  // ** Hooks
  const router = useRouter()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

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
        <Box
          sx={{
            padding: {
              xs: '0px 20px',
              sm: '54px 130px 24px 210px'
            }
          }}
        >
          {!isDesktop && (
            <Box sx={{ height: '70px', display: 'flex', alignItems: 'center' }}>
              <Image width={35} height={15} src='/images/logos/logo.png' alt='logo' />
            </Box>
          )}

          <Typography variant='body1' sx={{ fontSize: '24px', mb: '20px' }}>
            Search
          </Typography>

          <StyledTextField
            autoFocus
            fullWidth
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder='keyword'
            sx={{
              mt: '0',
              mb: {
                xs: 0,
                sm: '30px'
              }
            }}
          />

          {isDesktop && <Divider />}

          <Typography variant='body1' sx={{ mt: '30px', fontSize: '24px' }}>
            # Of Results Per Page
          </Typography>

          <Typography variant='body1' sx={{ mt: { xs: 0, sm: '4px' }, fontSize: '16px' }}>
            <Typography component='span' sx={{ fontWeight: 700, fontSize: '48px', mr: '10px' }}>
              {formatPageSize(pageSizeIndex)}
            </Typography>
            results
          </Typography>

          <Box
            sx={{
              mb: {
                xs: '210px',
                sm: '30px'
              }
            }}
          >
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

          <Box
            sx={{
              width: {
                xs: '100%',
                sm: '343px'
              },
              marginTop: {
                xs: '78px',
                sm: '337px !important'
              }
            }}
          >
            <Button variant='contained' fullWidth onClick={handleSearch}>
              Search
            </Button>
          </Box>

          {!isDesktop && router.pathname === '/' && (
            <MobileNavBar>
              <Link href='/' style={{ textDecoration: 'none' }}>
                <Stack justifyContent='center' alignItems='center' sx={{ p: 4 }}>
                  <Image width={24} height={24} src='/images/layout/nav-icon-active.svg' alt='logo' />
                </Stack>
              </Link>
              <Link href='/tags' style={{ textDecoration: 'none' }}>
                <Stack justifyContent='center' alignItems='center' sx={{ p: 4 }}>
                  <Image width={24} height={24} src='/images/layout/nav-icon-inactive.svg' alt='logo' />
                </Stack>
              </Link>
            </MobileNavBar>
          )}
        </Box>
      )}
    </StyledRootBox>
  )
}

export default SearchSection
