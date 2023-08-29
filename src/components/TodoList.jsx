import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import './TodoList.css';
import Todo from './Todo';

const TodoList = () => {
  const apiUrl = 'https://playground.4geeks.com/apis/fake/todos/user/Arisen';
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, [newTodo]);

  const putTodos = (apiUrl, options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  }) => {
    return fetch(apiUrl, options)
      .then((response) => {
        return response.json();
      });
  };

  const addTodo = (todo) => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const actualTodo = [todo, ...todos];
      setTodos(actualTodo);
      setNewTodo('');
      putTodos(apiUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(actualTodo)
      });
    }
  };

  const getTodos = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error.message));
  };

  const deleteTodo = (id) => {
    const actualTodo = todos.filter((todo) => todo.id !== id);
    setTodos(actualTodo);
    putTodos(apiUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(actualTodo)
    });
  };

  const fulfillTodo = (id) => {
    const actualTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.fulfilled = !todo.fulfilled;
      }
      return todo;
    });
    setTodos(actualTodo);
    putTodos(apiUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(actualTodo)
    });
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} setNewTodo={setNewTodo} newTodo={newTodo} />
      <div className="todo-list-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            fulfilled={todo.fulfilled}
            fulfillTodo={fulfillTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;