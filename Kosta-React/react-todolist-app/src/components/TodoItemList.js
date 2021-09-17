import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, myToggle, myRemove } = this.props;

        const todoList = todos.map(({ id, text, checked }) => (
            <TodoItem key={id} id={id} text={text} checked={checked} myToggle={myToggle} myRemove={myRemove}/>
        )) 

        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;
