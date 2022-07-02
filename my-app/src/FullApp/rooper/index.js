
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/system';
import { CssBaseline } from '@mui/material';

const setupStore = () => {
  
}
const theme = createTheme({

})
const store = setupStore();

const MyApp = () => {

  return(
    <Provider store={store}>
      <head>
        <title>Create Now</title>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        
      </ThemeProvider>
    </Provider>
  )
}