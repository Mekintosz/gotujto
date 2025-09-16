import RecipeCard from "./RecipeCard";
import { recipes } from "../data/recipes-list";
import SearchBox from "./SearchBox";
import { useState, useMemo } from "react";

export default function MainContent() {
  const { query, setQuery } = useState("");

  const normalizedQuery = (query || "").trim().toLowerCase();

  const filteredRecipes = useMemo(() => {
    if (!normalizedQuery) return recipes;

    return recipes.filter((recipe) => {
      const titleMatches = (recipe.title ?? "")
        .toLowerCase()
        .includes(query.toLowerCase());

      // OPTIONAL: search ingredients too (uncomment to enable)
      // const ingredientsMatches = (r.ingredients || []).some(i =>
      //   i.toLowerCase().includes(normalizedQuery)
      // );

      // currently we match only title - OR combine with ingredientsMatches:
      // return titleMatches || ingredientsMatches;
      return titleMatches;
    });
  }, [normalizedQuery]);

  return (
    <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <SearchBox query={query} setQuery={setQuery} />

      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            {...recipe}
            query={query}
            setQuery={setQuery}
          />
        ))
      ) : (
        <p className="text-textSecondary">Nie znaleziono przepisów.</p>
      )}
    </main>
  );
}
