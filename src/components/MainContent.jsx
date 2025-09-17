import RecipeCard from "./RecipeCard";
import useRecipes from "../hooks/useRecipes";
import SearchBox from "./SearchBox";
import { useState, useMemo } from "react";

export default function MainContent() {
  const [query, setQuery] = useState("");

  const { recipes, loading, error } = useRecipes();

  const normalizedQuery = (query || "").trim().toLowerCase();

  const filteredRecipes = useMemo(() => {
    if (!normalizedQuery) return recipes;

    return recipes.filter((recipe) => {
      const titleMatches = (recipe.title ?? "")
        .toLowerCase()
        .includes(normalizedQuery);

      // Optional: also search ingredients
      // const ingredientsMatches = (recipe.ingredients || []).some(i =>
      //   i.toLowerCase().includes(normalizedQuery)
      // );

      return titleMatches; // or titleMatches || ingredientsMatches
    });
  }, [normalizedQuery, recipes]);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="p-6 text-red-500">Error loading recipes.</p>;

  return (
    <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <SearchBox query={query} onChange={setQuery} />

      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} {...recipe} />
        ))
      ) : (
        <p className="text-textSecondary">Nie znaleziono przepisów.</p>
      )}
    </main>
  );
}
