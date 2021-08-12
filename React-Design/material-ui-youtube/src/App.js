import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Home from './Home';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#F4F6F8',
        paper: darkMode ? '#232323' : '#FFF',
      }
    },
    spacing: 4,
  });

  return (
    <ThemeProvider theme={theme}>
      <Home
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </ThemeProvider>
  );
}

export default App;
