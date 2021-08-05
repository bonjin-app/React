import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

const useStyle = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  }
})

function App() {
  const classes = useStyle();

  return (
    <>
      <CssBaseline/>
      <SideMenu/ >
      <div className={classes.appMain}>
        <Header/>
      </div>
    </>
  );
}

export default App;
