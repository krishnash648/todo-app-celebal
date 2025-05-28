function FilterBar({ filter, setFilter, sortOrder, setSortOrder }) {
  return (
    <div className="filter-bar">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="done">Completed</option>
        <option value="notdone">Pending</option>
      </select>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
}

export default FilterBar;
