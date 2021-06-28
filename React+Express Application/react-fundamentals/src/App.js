import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Contact from './components/Contact';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Contact/>
      </div>
    );
  }
}

export default App;
