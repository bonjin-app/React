import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Home from './Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  spacing: 4,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
