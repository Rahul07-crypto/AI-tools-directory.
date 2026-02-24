import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import ToolList from "../components/ToolList";
import Loader from "../components/Loader";
import ToolModal from "../components/ToolModal";

const Home = () => {

  /* ================= STATES ================= */

  const [tools, setTools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⭐ FAVORITES (PERSISTENT)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // ⭐ MODAL STATE
  const [selectedTool, setSelectedTool] = useState(null);

  /* ================= FETCH API ================= */

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await fetch(
          "https://api.sampleapis.com/futurama/characters"
        );

        if (!res.ok) throw new Error("API Error");

        const data = await res.json();
        setTools(data);
      } catch {
        setError("Failed to load tools");
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  /* ================= SAVE FAVORITES ================= */

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  /* ================= FAVORITE TOGGLE ================= */

  const toggleFavorite = (tool) => {
    const exists = favorites.find((fav) => fav.id === tool.id);

    if (exists) {
      setFavorites(
        favorites.filter((fav) => fav.id !== tool.id)
      );
    } else {
      setFavorites([...favorites, tool]);
    }
  };

  /* ================= FILTER LOGIC ================= */

  const filteredTools = tools
    .filter((tool) =>
      tool.name.first
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((tool) =>
      category === "All" ? true : tool.species === category
    );

  /* ================= UI STATES ================= */

  if (loading) return <Loader />;
  if (error) return <h2 className="error">{error}</h2>;

  /* ================= RENDER ================= */

  return (
    <div className="container">

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FilterButtons setCategory={setCategory} />

      <ToolList
        tools={filteredTools}
        onSelect={setSelectedTool}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      {/* ⭐ DETAILS MODAL */}
      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}

    </div>
  );
};

export default Home;