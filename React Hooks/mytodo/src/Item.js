import React from 'react'
import './Item.css';

const Item = (props) => {
    const handleToggle = (e) => {
        const id = e.target.dataset.id;
        props.dispatch({ type: "CHANGE_TODO_STATUS", payload: id });
    }

    const itemClassName = props.todo.status === 'done' ? 'done' : '';

    return (
        <>
            <li data-id={props.todo.id} className={itemClassName} onClick={handleToggle}>
                {props.todo.title}
            </li>
        </>
    )
}

export default Item