const FilterButtons = ({ setCategory }) => {
  return (
    <div className="filters">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Human")}>Human</button>
      <button onClick={() => setCategory("Mutant")}>Mutant</button>
      <button onClick={() => setCategory("Robot")}>Robot</button>
    </div>
  );
};

export default FilterButtons;