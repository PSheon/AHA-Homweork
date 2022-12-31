// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Slider = (theme: Theme) => {
  return {
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 8,
          '& .MuiSlider-track': {
            border: 'none',
            background: 'linear-gradient(90deg, rgba(255,92,1,1) 0%, rgba(255,210,95,1) 100%)'
          },
          '& .MuiSlider-trackFalse': {
            opacity: 0.3,
            color: '#FFFFFF',
            border: '8px solid #FFFFFF'
          },
          '& .MuiSlider-mark': {
            opacity: 0
          },
          '& .MuiSlider-thumb': {
            width: '26px',
            height: '26px',
            background: theme.palette.background.paper,
            border: '6px solid #FFD05D'
          },
          '& .MuiSlider-thumb:hover,.MuiSlider-thumb.Mui-active,.MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: 'none'
          }
        }
      }
    }
  }
}

export default Slider
