import { Link, useLocation } from "react-router-dom";

function RecipeCard({ id, title, description, image }) {
  const location = useLocation();
  const fromCategory = location.pathname.startsWith("/category/")
    ? location.pathname.split("/").pop()
    : null;

  return (
    <Link
      to={`/recipes/${id}`}
      state={fromCategory ? { fromCategory } : null}
      className="block group"
    >
      <div className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-bold text-textPrimary">{title}</h3>
          <p className="mt-1 text-sm text-textSecondary">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
