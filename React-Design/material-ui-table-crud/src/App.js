import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

function App() {
  return (
    <>
      <NavBar />
      <CodeForInterview />
      <AllUsers />
      <AddUser/>
    </>
  );
}

export default App;
