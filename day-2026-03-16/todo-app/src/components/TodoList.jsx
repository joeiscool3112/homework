

function TodoList({ todos, onToggle, onDelete }) {
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