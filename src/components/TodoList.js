import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filter, sortOrder }) {
  const filtered = todos.filter(todo =>
    filter === 'all' ? true :
    filter === 'done' ? todo.completed : !todo.completed
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'newest') return b.timestamp - a.timestamp;
    if (sortOrder === 'oldest') return a.timestamp - b.timestamp;
    if (sortOrder === 'az') return a.text.localeCompare(b.text);
    return b.text.localeCompare(a.text);
  });

  return (
    <div className="todo-list">
      {sorted.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
}

export default TodoList;
