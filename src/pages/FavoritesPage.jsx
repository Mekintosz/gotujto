import useRecipesContext from "../contexts/useRecipesContext";
import RecipeCard from "../components/RecipeCard";

function FavoritesPage() {
  const { recipes, favorites } = useRecipesContext();
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (favoriteRecipes.length === 0) {
    return (
      <p className="flex-1 self-center text-center text-xl">
        Nie masz jeszcze zapisanych przepisów!
      </p>
    );
  }

  return (
    <section>
      <h2 className="pl-6 pt-6 text-xl lg:text-2xl font-medium tracking-[-0.015em]">
        Twoje ulubione przepisy:
      </h2>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
}

export default FavoritesPage;
