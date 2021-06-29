import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [title, setTitle] = useState('남자 코드 추천')

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>        
      </div>

      <div className="list">
        <h3>{title}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
