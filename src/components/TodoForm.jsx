import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
        complete: false,
      };

      onSubmit(newTodo);
      setInput('');
    }
  };

  return (
    <form className='todo-form' onSubmit={handleFormSubmit}>
      <input
        className='todo-input'
        type='text'
        placeholder='Add todo'
        name='text'
        value={input}
        onChange={handleInputChange}
      />
      <button className='todo-button' type='submit'>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;