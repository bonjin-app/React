import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selectedContentId: 2,
      subject: {title: 'WEB', sub: 'World wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for Design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'},
      ],
    }
  }

  render() {
    console.log('App render');

    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;

    } else if (this.state.mode === 'read') {
        var i = 0;
        while(i < this.state.contents.length) {
          var data = this.state.contents[i]
          if(data.id === this.state.selectedContentId) {
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i++;
        }
    }

    return (
      <div className="App">
          <Subject title={this.state.subject.title} 
                  sub={this.state.subject.sub}
                  onChagePage={function() {
                    this.setState({
                      mode: 'welcome'
                    })
                  }.bind(this)} />
        <TOC onChagePage={
          function(id) {
            this.setState({
              mode: 'read',
              selectedContentId: Number(id)
            })
          }.bind(this)
        } data={this.state.contents}/>
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
