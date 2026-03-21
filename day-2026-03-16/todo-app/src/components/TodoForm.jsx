import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    onAddTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Type your todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;