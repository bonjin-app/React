import { useEffect, createContext, useReducer } from 'react';
import './App.css';

import useFetch from './useFetch';
import { todoReducer } from './reducers';

export const TodoContext = createContext();

const TodoStore = (props) => {
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
                {props.children}
            </TodoContext.Provider>
        </>
    );
}

export default TodoStore;
