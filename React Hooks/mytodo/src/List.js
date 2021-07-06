import React, { useContext } from 'react'
import Item from './Item'
import { TodoContext } from './TodoStore';

const List = (props) => {
    const { todos, loading, dispatch } = useContext(TodoContext);

    return (
        <div>
            {loading ?
                <li>Loading...</li>
                :
                todos.map((m, i) => {
                    return <Item
                        key={i}
                        todo={m}
                        dispatch={dispatch}>{m.title}</Item>
                })
            }
        </div>
    )
}

export default List
