import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/header/Header';
import PlaceToVisit from './components/PlaceToVisit';


const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg.jpg)`,
    backgroundRepeat: 'no-repeact',
    backgroundSize: 'cover',
  }
}));

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header />
      <PlaceToVisit/>
    </div>
  );
}

export default App;
