import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import { Component } from 'react';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.maxContentId = 3;
    this.state = {
      mode: 'welcome',
      selectedContentId: 0,
      subject: {title: 'WEB', sub: 'World wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for Design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'},
      ],
    }
  }

  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i]
      if(data.id === this.state.selectedContentId) {
        return data
        break;
      }
      i++;
    }
  }

  getContent() {
    var _title, _desc, _article = null;
    
    if(this.state.mode === 'welcome') {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}/>

    } else if (this.state.mode === 'read') {
        var content = this.getReadContent()
        _article = <ReadContent title={content.title} desc={content.desc}/>

    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(title, desc) {

        this.maxContentId = this.maxContentId + 1;
        var content = {id: this.maxContentId, title: title, desc: desc}
        // 원본을 수정
        // this.state.contents.push(content)

        // 사본을 생성
        // this.state.contents.concat(content)

        // 불변
        // var newContent = Array.from(this.state.contents)
        // this.state.contents = newContent.push(content);

        var contents = Array.from(this.state.contents)
        contents.push(content);
        this.setState({
          contents: contents,
          mode: 'read',
          selectedContentId: this.maxContentId
        })
        
      }.bind(this)}/>

    } else if (this.state.mode === 'update') {
      var content = this.getReadContent()
      _article = <UpdateContent data={content} onSubmit={function(id, title, desc) {
        console.log(id, title, desc)

        var contents = Array.from(this.state.contents)
        var i = 0;
        while(i < contents.length) {
          if(contents[i].id === id) {
            console.log(contents[i])
            contents[i] = {id: id, title: title, desc: desc}
            break;
          }
          i = i + 1;
        }

        this.setState({
          contents: contents,
          mode: 'read'
        })
        
      }.bind(this)}/>
    }
    return _article;
  }

  render() {
    console.log('App render');

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
        <Control onChangeMode={function(mode) {

          if (mode === "delete") {
            if(window.confirm('really?')) {
              var contents = Array.from(this.state.contents)
              var i = 0;
              while(i < contents.length) {
                if(contents[i].id == this.state.selectedContentId) {
                  contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }

              this.setState({
                mode: 'welcome',
                contents: contents
              })

              alert('deleted')
            }

          } else {
            this.setState({
              mode: mode
            })
          }
         
        }.bind(this)}/>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
