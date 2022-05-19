import React, { useState } from 'react'


const TodoInput = ({ addTodo }) => {
    const [value, setValue] = useState("")
    return (
        <div>
            <input type="text" value={value} placeholder='New ToDo item' onChange={(e) => {
                setValue(e.target.value)
            }} />
            <button
                disabled={!value}
                onClick={() => {
                    console.log(value)
                    addTodo(value)
                    setValue("")
                }}>Add</button>
        </div>
    )
}

export default TodoInput


