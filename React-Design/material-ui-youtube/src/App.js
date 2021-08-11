import { Button, ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div style={{
        backgroundColor: 'red',
        height: '100vh',
      }}></div>
    </ThemeProvider>
  );
}

export default App;
