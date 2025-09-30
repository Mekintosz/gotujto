import { useMemo } from "react";
import useRecipesContext from "../contexts/useRecipesContext.js";
import RecipeCard from "./RecipeCard.jsx";

const LATEST_COUNT = 4;

export default function NowoDodane() {
  const { recipes, loading, error } = useRecipesContext();

  const latestRecipes = useMemo(() => {
    if (!recipes || recipes.length === 0) return [];

    return [...recipes]
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt ?? 0).getTime();
        const dateB = new Date(b.publishedAt ?? 0).getTime();
        return dateB - dateA;
      })
      .slice(0, LATEST_COUNT);
  }, [recipes]);

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <h2 className="text-[#1b140d] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
        Najnowsze przepisy
      </h2>
      {loading ? (
        <p className="px-4 text-sm text-[#9a704c]">Ładowanie przepisów...</p>
      ) : error ? (
        <p className="px-4 text-sm text-red-500">
          Nie udało się wczytać przepisów.
        </p>
      ) : latestRecipes.length === 0 ? (
        <p className="px-4 text-sm text-[#9a704c]">Brak nowych przepisów.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {latestRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
}
