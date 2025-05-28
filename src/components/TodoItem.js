// TodoItem.js
function TodoItem({ todo, todos, setTodos }) {
  const toggleComplete = () => {
    const updated = todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t);
    setTodos(updated);
  };

  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <span onClick={toggleComplete}>{todo.text}</span>
      <button onClick={deleteTodo}>❌</button>
    </div>
  );
}

export default TodoItem;
