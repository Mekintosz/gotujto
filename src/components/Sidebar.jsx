import { Link } from "react-router-dom";
import useRecipesContext from "../contexts/useRecipesContext.js";

function Sidebar() {
  const { recipes, loading, error } = useRecipesContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!recipes || recipes.length === 0) return <p>No recipes found.</p>;

  const categories = [...new Set(recipes.map((r) => r.category))];

  return (
    <aside className="sticky top-20 hidden w-68 shrink-0  border-[var(--secondary-color)] p-6 md:block">
      <h2 className="text-xl font-medium uppercase tracking-wider">
        Kategorie
      </h2>
      <ul className="mt-8 ml-3 flex flex-col gap-2">
        <Link
          to="/"
          className="flex items-center justify-between rounded-lg py-3 text-md font-medium hover:text-text-logo transition-colors"
        >
          Wszystkie przepisy
          <span className="material-symbols-outlined text-xl">
            chevron_right
          </span>
        </Link>
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to={`/category/${encodeURIComponent(cat.toLowerCase())}`}
              className="flex items-center justify-between rounded-lg py-3 text-md font-medium  hover:text-text-logo transition-colors"
            >
              {cat}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
