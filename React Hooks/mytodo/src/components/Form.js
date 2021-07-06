import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form action="">
                <input type="text" name="" value={props.input} onChange={props.onChange}></input>
                <button onClick={props.handleButtonClick}>할일추가</button>
            </form>
        </div>
    )
}

export default Form