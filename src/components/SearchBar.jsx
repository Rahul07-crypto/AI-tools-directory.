const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search tools..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;