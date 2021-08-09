import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolid from './pages/Portfolio/Portfolid';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
          <Header />
          <Portfolid />
          <Resume />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
