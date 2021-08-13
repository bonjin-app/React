import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/header/Header';


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
      <Header/>
    </div>
  );
}

export default App;
