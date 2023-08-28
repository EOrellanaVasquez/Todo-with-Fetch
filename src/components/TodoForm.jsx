import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './TodoForm.css'

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const controlnput = e => {
      setInput(e.target.value);
    };

    const controlSend = e => {
      e.preventDefault();
      
      const newTodo = {
        id: uuidv4(),
        text: input,
        complete: false
      };

      props.onSubmit(newTodo);
    };

  return (
    <>
    <form className='todo-form'
      onSubmit={controlSend}>
      <input
      className='todo-input'
      type='text'
      placeholder='Add todo' 
      name='text'
      onChange={controlnput}  
      />
    <button className='todo-button'>
      Add Todo
    </button>
    </form>
    </>
  )
}

export default TodoForm
