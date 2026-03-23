function FilterBar({ currentFilter, onChangeFilter }) {
  return (
    <div>
      <button
        onClick={() => onChangeFilter('all')}
        style={{
          fontWeight: currentFilter === 'all' ? 'bold' : 'normal',
          backgroundColor: currentFilter === 'all' ? '#ddd' : 'white'
        }}
      >
        All
      </button>

      <button
        onClick={() => onChangeFilter('active')}
        style={{
          fontWeight: currentFilter === 'active' ? 'bold' : 'normal',
          backgroundColor: currentFilter === 'active' ? '#ddd' : 'white'
        }}
      >
        Active
      </button>

      <button
        onClick={() => onChangeFilter('completed')}
        style={{
          fontWeight: currentFilter === 'completed' ? 'bold' : 'normal',
          backgroundColor: currentFilter === 'completed' ? '#ddd' : 'white'
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterBar;