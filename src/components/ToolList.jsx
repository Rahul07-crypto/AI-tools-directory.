import ToolCard from "./ToolCard";

const ToolList = ({
  tools,
  onSelect,
  favorites,
  toggleFavorite,
}) => {
  return (
    <div className="grid">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          onSelect={onSelect}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default ToolList;