// ** Next Import
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// ** Types
import { BlankLayoutProps } from './types'

// ** Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',

  // For V1 Blank layout pages
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },

  // For V2 Blank layout pages
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative'
  }
}))
const DesktopNavBar = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '80px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.palette.background.paper
}))
const MobileNavBar = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '68px',
  background: theme.palette.background.paper
}))
const StyledLink = styled(Link)(() => ({
  width: '100%',
  height: '88px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none'
}))

const BlankLayout = ({ children }: BlankLayoutProps) => {
  // ** Hooks
  const router = useRouter()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  return (
    <BlankLayoutWrapper className='layout-wrapper'>
      <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
        {isDesktop && (
          <DesktopNavBar>
            <StyledLink href='/'>
              <Image width={35} height={15} src='/images/logos/logo.png' alt='logo' />
            </StyledLink>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <Stack justifyContent='center' alignItems='center' sx={{ mb: 6 }}>
                <Image width={24} height={24} src='/images/layout/nav-icon.svg' alt='logo' />
                <Typography variant='caption' color='text.primary' sx={{ height: '15px', ontSize: '12px' }}>
                  {router.pathname === '/' && 'Home'}
                </Typography>
              </Stack>
            </Link>
            <Link href='/tags' style={{ textDecoration: 'none' }}>
              <Stack justifyContent='center' alignItems='center'>
                <Image width={24} height={24} src='/images/layout/nav-icon.svg' alt='logo' />
                <Typography variant='caption' color='text.primary' sx={{ height: '15px', fontSize: '12px' }}>
                  {router.pathname === '/tags' && 'Tags'}
                </Typography>
              </Stack>
            </Link>
          </DesktopNavBar>
        )}
        {children}
        {!isDesktop && <MobileNavBar>pending</MobileNavBar>}
      </Box>
    </BlankLayoutWrapper>
  )
}

export default BlankLayout
