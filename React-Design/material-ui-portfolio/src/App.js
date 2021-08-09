import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolid from './pages/Portfolio/Portfolid';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Container style={{ marginTop: 60 }}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Switch>
              <Route path='/portfolio' component={Portfolid}/>
              <Route path='/' component={Resume}/>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
