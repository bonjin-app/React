import React from 'react'

const List = (props) => {

    return (
        <div>
            {props.loading ?
                <li>Loading...</li>
                :
                props.todos.map((m, i) => {
                    return <li key={i}>{m.title}</li>
                })
            }
        </div>
    )
}

export default List
