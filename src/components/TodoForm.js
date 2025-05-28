import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return alert("Task can't be empty.");

    const newTodo = {
      id: uuidv4(),
      text: trimmed,
      completed: false,
      timestamp: Date.now()
    };

    setTodos([newTodo, ...todos]);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done?" />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
