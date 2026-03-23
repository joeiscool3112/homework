

function TodoList({ todos, onToggle, onDelete }) {
      const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{
            textDecoration: todo.done ? 'line-through' : 'none'
          }}>
            {todo.text}
          </span>
          <button onClick={() => onToggle(todo.id)}>Toggle</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;