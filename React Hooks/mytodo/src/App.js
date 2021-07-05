import { useState, useEffect } from 'react';
import './App.css';
import List from './List'

const App = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);

    setNewTodo('');
  }

  const fetchInitialDate = async () => {
    setLoading(true)
    const response = await fetch('/todo');
    const body = await response.json();
    setLoading(false)
    setTodos(body);
  }

  useEffect(() => {
    console.log("새로운 내용이 렌더링")
  }, [todos])

  useEffect(() => {
    fetchInitialDate();
  }, [])

  return (
    <>
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
