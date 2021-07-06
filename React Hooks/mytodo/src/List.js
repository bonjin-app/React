import React, { useContext } from 'react'
import Item from './Item'
import { TodoContext } from './App'

const List = (props) => {
    const { todos, loading, changeTodoStatus } = useContext(TodoContext);

    return (
        <div>
            {loading ?
                <li>Loading...</li>
                :
                todos.map((m, i) => {
                    return <Item key={i} todo={m} changeTodoStatus={changeTodoStatus}>{m.title}</Item>
                })
            }
        </div>
    )
}

export default List
