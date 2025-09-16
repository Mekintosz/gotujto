import { recipes } from "../data/recipes-list";
import { Link } from "react-router-dom";

function Sidebar() {
  const categories = [...new Set(recipes.map((r) => r.category))];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-[var(--secondary-color)] p-6 md:block">
      <h3 className="text-base font-bold uppercase tracking-wider text-[var(--text-secondary)]">
        Categories
      </h3>
      <ul className="mt-6 flex flex-col gap-1">
        <Link
          to="/"
          className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
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
              className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            >
              {cat}
              <span className="material-symbols-outlined text-xl">
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
