import { useParams } from "react-router-dom";
import useRecipesContext from "../contexts/useRecipesContext";
import RecipeCard from "../components/RecipeCard";

function CategoryPage() {
  const { recipes, loading, error } = useRecipesContext();
  const { category } = useParams();

  const filtered = recipes.filter(
    (r) => r.category.toLowerCase() === category.toLowerCase()
  );

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="p-6 text-red-500">Error loading recipes.</p>;

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.length > 0 ? (
        filtered.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)
      ) : (
        <p>Nie znaleziono przepisów w tej kategori</p>
      )}
    </main>
  );
}

export default CategoryPage;
