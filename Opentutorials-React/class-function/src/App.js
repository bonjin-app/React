import { Component, useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}/>
      <ClassComp initNumber={2}/>
    </div>
  );
}

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <input type="button" value="random" onClick={function() {
          setNumber(Math.random())
      }}></input>
    </div>
  )
}

class ClassComp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: this.props.initNumber
    }
  }

  render() {
    return (
      <div className="container">
      <h2>class style component</h2>
      <p>{this.props.initNumber}</p>
      <p>{this.state.number}</p>
      <input type="button" value="random" onClick={function() {
        this.setState({
          number: Math.random()
        })
      }.bind(this)}></input>
    </div>
    )
  }
}

export default App;
