import React, { useContext } from 'react'
import './Header.css'
import { TodoContext } from './TodoStore';

const Header = (props) => {

    const { todos } = useContext(TodoContext);

    return (
        <>
            {/* Consumer */}
            {/* <TodoContext.Consumer>
                {
                    ({ todos }) => {
                        <div>
                            <h1>HELLO TODO 애플리케이션</h1>
                            <div className="count-info">해야할 일이 {todos.filter((f) => f.status === "todo").length} 개가 있습니다.</div>
                        </div>
                    }
                }
            </TodoContext.Consumer> */}

            {/* useContext */}
            <div>
                <h1>HELLO TODO 애플리케이션</h1>
                <div className="count-info">
                    해야할 일이 {todos.filter((f) => f.status === "todo").length} 개가 있습니다.
                </div>
            </div>

        </>
    )
}

export default Header
