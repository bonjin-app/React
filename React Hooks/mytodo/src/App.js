import { useState, useEffect } from 'react';
import './App.css';
import List from './List'
import useFetch from './useFetch';
import Header from './Header';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const loading = useFetch(setTodos, '/todo');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: todos.length,
      title: newTodo,
      statud: 'todo'
    }]);

    setNewTodo('');
  }

  useEffect(() => {
    console.log("새로운 내용이 렌더링")
  }, [todos])

  return (
    <>
      <Header todos={todos} />
      <h1>Todo Application</h1>
      <form action="">
        <input type="text" name="" value={newTodo} onChange={handleChange}></input>
        <button onClick={handleButtonClick}>할일추가</button>
      </form>

      <List todos={todos} loading={loading} />
    </>
  );
}

export default App;
