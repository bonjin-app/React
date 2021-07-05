import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List'

const App = () => {

  const [todos, setTodos] = useState(['js공부', 'css공부']);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);

    setNewTodo('');
  }

  useEffect(() => {
    console.log("새로운 내용이 렌더링")
  }, [todos])

  return (
    <>
      <h1>Todo Application</h1>
      <form action="">
        <input type="text" name="" value={newTodo} onChange={handleChange}></input>
        <button onClick={handleButtonClick}>할일추가</button>
      </form>

      <List todos={todos} />
    </>
  );
}

export default App;
