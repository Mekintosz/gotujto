import RecipeCard from "./RecipeCard";
import { recipes } from "../data/recipes-list";

export default function MainContent() {
  return (
    <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} id={recipe.id} {...recipe} />
      ))}
    </main>
  );
}
