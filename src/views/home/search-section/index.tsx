// ** MUI Imports
import { styled } from '@mui/material/styles'
import Stack, { StackProps } from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Slider from '@mui/material/Slider'

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
  return (
    <StyledRootStack flexDirection='column' spacing={12}>
      <Typography variant='body1'>Search</Typography>

      <TextField placeholder='keyword' />

      <Divider />

      <Typography variant='body1'># of results per page</Typography>

      <Box>
        <Slider size='medium' defaultValue={100} valueLabelDisplay='off' min={1} max={6} />
        <Stack flexDirection='row' justifyContent='space-between'>
          <Typography variant='caption'>3</Typography>
          <Typography variant='caption'>3</Typography>
          <Typography variant='caption'>3</Typography>
          <Typography variant='caption'>3</Typography>
          <Typography variant='caption'>3</Typography>
          <Typography variant='caption'>3</Typography>
        </Stack>
      </Box>

      <Box sx={{ width: '343px', marginTop: 'auto !important' }}>
        <Button variant='contained' fullWidth>
          Search
        </Button>
      </Box>
    </StyledRootStack>
  )
}

export default SearchSection
