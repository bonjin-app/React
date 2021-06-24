import { Component, useEffect, useState} from 'react';
import './App.css';

function App() {
  const [showFunc, setShowFunc] = useState(true)
  const [showClass, setShowClass] = useState(true)
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function() {
        setShowFunc(!showFunc)
      }}></input>
      <input type="button" value="remove class" onClick={function() {
        setShowClass(!showClass)
      }}></input>
      {showFunc ? <FuncComp initNumber={2} /> : null}
      {showClass ? <ClassComp initNumber={2}/> : null}
    </div>
  );
}

var funcStyle = 'color:green';
var funcId = 0;

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState();

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(function() {
    console.log('%c func => useEffect (componentDidMount)' + (++funcId), funcStyle)
    document.title = number

    return function() {
      console.log('%c func => useEffect Return (componentWillUnMount)' + (++funcId), funcStyle)
    }
  }, [])

  useEffect(function() {
    console.log('%c func => useEffect number' + (++funcId), funcStyle)
    document.title = number

    return function() {
      console.log('%c func => useEffect number Return ' + (++funcId), funcStyle)
    }
  }, [number])

  useEffect(function() {
    console.log('%c func => useEffect data' + (++funcId), funcStyle)
    document.title = date

    return function() {
      console.log('%c func => useEffect date Return ' + (++funcId), funcStyle)
    }
  }, [date])

  console.log('%c func => render' + (funcId), funcStyle)
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input type="button" value="random" onClick={function() {
          setNumber(Math.random())
      }}></input>
      <input type="button" value="date" onClick={function() {
          setDate(new Date().toString())
      }}></input>
    </div>
  )
}

class ClassComp extends Component {

  constructor(props) {
    console.log("%cclass => constructor", 'color: red;')
    super(props)
    this.state = {
      number: this.props.initNumber,
      date: new Date().toString()
    }
  }

  componentWillMount() {
    console.log("%cclass => componenetWillMount", 'color: red;')
  }

  componentDidMount() {
    console.log("%cclass => componentDidMount", 'color: red;')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", 'color: red;')
    return true;
  }

  componentWillUpdate() {
    console.log("%cclass => componentWillUpdate", 'color: red;')
  }

  componentDidUpdate() {
    console.log("%cclass => componentDidUpdate", 'color: red;')
  }

  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", 'color: red;')
  }

  render() {
    console.log("%cclass => render", 'color: red;')

    return (
      <div className="container">
      <h2>class style component</h2>
      <p>{this.props.initNumber}</p>
      <p>{this.state.number}</p>
      <p>Date: {this.state.date}</p>
      <input type="button" value="random" onClick={function() {
        this.setState({
          number: Math.random()
        })
      }.bind(this)}></input>

      <input type="button" value="date" onClick={function() {
        this.setState({
          date: new Date().toString()
        })
      }.bind(this)}></input>
    </div>
    )
  }
}

export default App;
