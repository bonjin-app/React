import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'World wide Web!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for Design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'},
      ],
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
                sub={this.state.subject.sub} />
        <Subject title="React" sub="For UI"/>
        <TOC data={this.state.contents}/>
        <Content title="HTML" desc="HTML is HyperText Markup Language."/>
        <Content title="DATE" desc={this.state.date.toLocaleTimeString()}/>
      </div>
    );
  }
}

export default App;
