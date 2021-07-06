import React, { useContext, useRef } from 'react'
import { TodoContext } from '../App'

const Form = (props) => {
    const inputRef = useRef(false)
    const { onClick } = useContext(TodoContext)

    const addTodoData = (e) => {
        e.preventDefault();
        onClick(inputRef.current.value);

        inputRef.current.value = '';
    }
    return (
        <div>
            <form action="">
                <input
                    type="text"
                    ref={inputRef}></input>
                <button onClick={addTodoData}>할일추가</button>
            </form>
        </div>
    )
}

export default Form