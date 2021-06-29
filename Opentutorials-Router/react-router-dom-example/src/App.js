import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";


function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topic() {
  return (
    <div>
      <h2>Topic</h2>
      Topic ...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact ...
    </div>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router DOM example</h1>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/topic">Topic</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/topic"><Topic /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/">Not Found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
