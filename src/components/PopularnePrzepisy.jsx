import { useMemo } from "react";
import useRecipesContext from "../contexts/useRecipesContext.js";
import RecipeCard from "./RecipeCard.jsx";

const MOST_VIEWED_COUNT = 4;

export default function PopularnePrzepisy() {
  const { recipes, loading, error } = useRecipesContext();

  const mostViewed = useMemo(() => {
    if (!recipes || recipes.length === 0) return [];

    return [...recipes]
      .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
      .slice(0, MOST_VIEWED_COUNT);
  }, [recipes]);

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <h2 className="text-[#1b140d] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
        Popularne przepisy
      </h2>
      {loading ? (
        <p className="px-4 text-sm text-[#9a704c]">Ładowanie przepisów...</p>
      ) : error ? (
        <p className="px-4 text-sm text-red-500">
          Nie udało się wczytać przepisów.
        </p>
      ) : mostViewed.length === 0 ? (
        <p className="px-4 text-sm text-[#9a704c]">
          Brak przepisów do wyświetlenia.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {mostViewed.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
}
