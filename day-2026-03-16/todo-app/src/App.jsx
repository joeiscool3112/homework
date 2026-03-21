import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import FilterBar from './components/FilterBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');  
  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        done: false
      }
    ]);
  };
  
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
};

 const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.done));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />

      <FilterBar currentFilter={filter} onChangeFilter={setFilter} />

      <TodoStats todos={todos} onClearCompleted={clearCompleted} />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;