import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Page from './pages/Page';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<>
          <NavBar/>
          <Outlet/>
        </>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
        </Route>
      
        <Route path='/page/:id' element={<Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
