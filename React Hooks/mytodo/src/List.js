import React from 'react'

const List = (props) => {
    return (
        <div>
            {props.todos.map((m, i) => {
                return <li key={i}>{m}</li>
            })}
        </div>
    )
}

export default List
