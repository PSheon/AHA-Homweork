// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Link href='/' passHref>
        <img src='/images/logos/logo.png' alt='logo' width='35' height='15' />
      </Link>
    </Box>
  )
}

export default AppBrand
