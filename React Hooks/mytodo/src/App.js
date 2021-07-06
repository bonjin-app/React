import { useState, useEffect, createContext } from 'react';
import './App.css';
import List from './List'
import useFetch from './useFetch';
import Header from './Header';
import Form from './components/Form';

export const TodoContext = createContext();

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
      id: todos.length + 1,
      title: newTodo,
      statud: 'todo'
    }]);

    setNewTodo('');
  }

  const changeTodoStatus = (id) => {
    const updateTodo = todos.map((m) => {
      if (m.id === +id) {
        if (m.status === "done") {
          m.status = "todo"
        } else {
          m.status = "done"
        }
      }
      return m;
    })

    setTodos(updateTodo)
  }

  useEffect(() => {
    console.log("새로운 내용이 렌더링")
  }, [todos])

  return (
    <>
      <TodoContext.Provider value={{
        todos: todos,
        input: newTodo,
        onClick: handleButtonClick,
        onChange: handleChange,
        loading,
        changeTodoStatus
      }}>
        <Header />

        <h1>Todo Application</h1>

        <Form />

        <List />
      </TodoContext.Provider>
    </>
  );
}

export default App;
