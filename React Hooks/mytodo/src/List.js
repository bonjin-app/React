import React from 'react'
import Item from './Item'

const List = (props) => {

    return (
        <div>
            {props.loading ?
                <li>Loading...</li>
                :
                props.todos.map((m, i) => {
                    return <Item key={i} todo={m} changeTodoStatus={props.changeTodoStatus}>{m.title}</Item>
                })
            }
        </div>
    )
}

export default List
