import React, { useContext } from 'react'
import { TodoContext } from '../App'

const Form = (props) => {
    const { input, onClick, onChange } = useContext(TodoContext)
    return (
        <div>
            <form action="">
                <input type="text" name="" value={input} onChange={onChange}></input>
                <button onClick={onClick}>할일추가</button>
            </form>
        </div>
    )
}

export default Form