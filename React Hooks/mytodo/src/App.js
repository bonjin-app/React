import { useEffect, createContext, useReducer } from 'react';
import './App.css';
import List from './List'
import useFetch from './useFetch';
import Header from './Header';
import Form from './components/Form';

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log('ADD_TODO');
      return [...state, {
        id: state.length + 1,
        title: action.payload,
        status: 'todo'
      }];

    case "SET_INIT_DATA":
      console.log('SET_INIT_DATA');
      return action.payload;

    case "CHANGE_TODO_STATUS":
      console.log('CHANGE_TODO_STATUS');

      // let newState = Object.assign({}, state);
      // let newState = [...state];
      return state.map(m => {
        // 복사 하지 않으면 변경이 정상적으로 이뤄지지 않는다.
        let todo = Object.assign({}, m);
        if (todo.id === +action.payload) {
          if (todo.status === "done") todo.status = "todo";
          else todo.status = "done";
        }
        console.log('todo', todo);
        return todo;
      });

    default:
      break;
  }
}

const App = () => {
  const [todosState, todosDispatch] = useReducer(todoReducer, [])

  const setupInitData = (initData) => {
    todosDispatch({ type: "SET_INIT_DATA", payload: initData })
  }
  const loading = useFetch(setupInitData, '/todo');

  return (
    <>
      <TodoContext.Provider value={{
        todos: todosState,
        loading,
        dispatch: todosDispatch
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
