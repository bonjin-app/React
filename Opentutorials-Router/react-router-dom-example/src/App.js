import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, useParams } from "react-router-dom";

var contents = [
  { id: 1, title: 'HTML', description: 'HTML IS ...' },
  { id: 2, title: 'CSS', description: 'CSS IS ...' },
  { id: 3, title: 'JS', description: 'JS IS ...' },
]

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topic() {
  var { id } = useParams();
  var content = {
    title: 'Sorry',
    description: 'Not Found',
  }
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id == Number(id)) {
      content = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{content.title}</h3>
      {content.description}
    </div>
  )
}

function TopicList() {
  var list = [];
  contents.forEach(e => {
    list.push(
      <li key={e.id}><NavLink to={`/topic/${e.id}`}>{e.title}</NavLink></li>
    )
  })

  return (
    <div>
      <h2>Topic</h2>
      Topic ...

      <ul>
        {list}
      </ul>

      <Route path="/topic/:id">
        <Topic></Topic>
      </Route>
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
          <Route path="/topic"><TopicList /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/">Not Found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
