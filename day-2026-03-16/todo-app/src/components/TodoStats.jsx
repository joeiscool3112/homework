function TodoStats({ todos, onClearCompleted }) {
  const completedCount = todos.filter((todo) => todo.done).length;
  const totalCount = todos.length;
  const itemsLeft = totalCount - completedCount;

  return (
    <div>
      <p>{itemsLeft} items left</p>
      <p>{completedCount}/{totalCount} completed</p>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}

export default TodoStats;