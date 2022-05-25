
//themeProviderEx
import { Box, createTheme, ThemeProvider } from "@mui/material"

const themeExt = createTheme({
  palette:{
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#asd54f',
      secondary: '#46505A'
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688',
      dark: '#009688',
    },
  },
});
const ThemeProExt = () => {

  return(<ThemeProvider theme={themeExt}>
    <Box sx={{
      bgColor: 'Background.paper',
      boxShadow: 1,
      borderRadius: 1,
      p: 2,
      minWidth: 100,
    }}>
      
      <Box sx={{color: 'text.primary'}} >Sessions</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium'}}>98.3k</Box>
      <Box
        
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
        style={{color: 'red'}} 
        >+18.77%</Box>
      <Box>vs. last week</Box>
    </Box>
  </ThemeProvider>)
}
export default ThemeProExt;