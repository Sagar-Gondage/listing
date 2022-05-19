// import React, { Children } from 'react'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div>
            <h3>Here is your ToDo List</h3>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList