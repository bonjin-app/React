import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [title, setTitle] = useState(['남자 코드 추천', '강남 우동맛집', '파이썬 독학'])
  const [count, setCount] = useState(0)

  function changeTitle() {
    // var changeTitle = title.concat()
    var changeTitle = [...title]  // deep copy
    // changeTitle[0] = "여자 코드 추천"

    changeTitle.sort()
    setTitle(changeTitle)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>        
      </div>

      <button onClick={changeTitle}>버튼</button>

      <div className="list">
        <h3>{title[0]} <span onClick={ () => { 
          setCount(count+1) 
        }}>👍</span> {count} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
