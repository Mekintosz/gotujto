import RecipeCard from "../components/RecipeCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { useState, useMemo } from "react";
import useRecipesContext from "../contexts/useRecipesContext.js";

export default function Przepisy() {
  const { recipes, loading, error } = useRecipesContext();
  const [query, setQuery] = useState("");
  const normalizedQuery = (query || "").trim().toLowerCase();

  const filteredRecipes = useMemo(() => {
    if (!normalizedQuery) return recipes;

    return recipes.filter((recipe) => {
      const titleMatches = (recipe.title ?? "")
        .toLowerCase()
        .includes(normalizedQuery);
      return titleMatches;
    });
  }, [normalizedQuery, recipes]);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <main className="flex-1">
      <SearchBox value={query} onChange={setQuery} />
      <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} id={recipe.id} {...recipe} />
          ))
        ) : (
          <p className="text-textSecondary">Nie znaleziono przepisów.</p>
        )}
      </div>
    </main>
  );
}
