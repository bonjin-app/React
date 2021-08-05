import { createTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";

import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Employees from "../pages/Employees/Employees";

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
      MuiAppBar: {
          root: {
              transform: 'translateZ(0)',
          }
      }
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    }
  }
})

const useStyle = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  }
})

function App() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <SideMenu/ >
      <div className={classes.appMain}>
        <Header />
        <Employees/>
      </div>
    </ThemeProvider>
  );
}

export default App;
