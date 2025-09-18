import { Link } from "react-router-dom";
import useRecipesContext from "../contexts/useRecipesContext.js";

function Sidebar() {
  const { recipes, loading, error } = useRecipesContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!recipes || recipes.length === 0) return <p>No recipes found.</p>;

  const categories = [...new Set(recipes.map((r) => r.category))];

  return (
    <aside className="hidden w-68 shrink-0 border-r border-[var(--secondary-color)] p-6 md:block">
      <h2 className="text-xl font-medium uppercase tracking-wider text-[var(--text-secondary)]">
        Kategorie
      </h2>
      <ul className="mt-6 flex flex-col gap-2">
        <Link
          to="/"
          className="flex items-center justify-between rounded-lg py-3 text-md font-medium  text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
        >
          Wszystkie przepisy
          <span className="material-symbols-outlined text-xl">
            chevron_right
          </span>
        </Link>
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to={`/category/${cat.toLowerCase()}`}
              className="flex items-center justify-between rounded-lg py-3 text-md font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
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
