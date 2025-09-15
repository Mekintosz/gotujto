import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes-list";
import RecipeCard from "./RecipeCard";

function CategoryPage() {
  const { category } = useParams();
  const filtered = recipes.filter(
    (r) => r.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.length > 0 ? (
        filtered.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)
      ) : (
        <p>Nie znaleziono przepisów w tej kategori</p>
      )}
    </main>
  );
}

export default CategoryPage;
