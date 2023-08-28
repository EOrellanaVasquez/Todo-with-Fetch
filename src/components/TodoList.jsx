import React, { useState } from 'react'
import TodoForm from './TodoForm';
import './TodoList.css';
import Todo from './Todo';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (todo.text.trim()){
            todo.text = todo.text.trim();
            const actualTodo = [todo, ...todos];
            setTodos(actualTodo);
        }
    
    };

    const deleteTodo = id => {
        const actualTodo = todos.filter(todos => todos.id !== id);
        setTodos(actualTodo);
    }


    const fullfilTodo = id => {
        const actualTodo = todos.map(todos => {
            if (todos.id === id){
                todos.fullfiled = !todos.fullfiled;
            }
            
            return todos;
        });
        setTodos(actualTodo);
    }



  return (
    <>
      <TodoForm onSubmit={addTodo} />
        <div className='todo-list-container'>
            {
                todos.map((todos) => 
                <Todo 
                key={todos.id}
                id={todos.id}
                text={todos.text} 
                fullfiled={todos.fullfiled}
                fullfilTodo={fullfilTodo} 
                deleteTodo={deleteTodo} />
                )
            }
        </div>
    </>
  )
}

export default TodoList
