import React from 'react'
import './Todo.css'
import { BsTrash } from 'react-icons/bs';

const Todo = ({ id, text, fullfiled, fullfilTodo, deleteTodo }) => {
  return (
    <div className={fullfiled ? 'todo-container fullfiled' : 'todo-container'}>
        <div className='todo-text'
        onClick={() => fullfilTodo(id)}>
            {text}
        </div>
        <div className='todo-icons-container'
        onClick={() => deleteTodo(id)}>
           <BsTrash className='todo-icon'/>   
        </div>
    </div>
  )
}

export default Todo
