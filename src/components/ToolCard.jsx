const ToolCard = ({
  tool,
  onSelect,
  favorites = [],        // ✅ default value prevents crash
  toggleFavorite,
}) => {

  const isFavorite = favorites.some(
    (fav) => fav.id === tool.id
  );

  return (
    <div className="card">
      <h3>
        {tool.name.first} {tool.name.last}
      </h3>

      <p><strong>Category:</strong> {tool.species}</p>

      <div className="card-buttons">

        <button onClick={() => onSelect(tool)}>
          Details
        </button>

        <button
          className={isFavorite ? "fav active-fav" : "fav"}
          onClick={() => toggleFavorite(tool)}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>

      </div>
    </div>
  );
};

export default ToolCard;