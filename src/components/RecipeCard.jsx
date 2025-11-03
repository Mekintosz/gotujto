import { Link, useLocation } from "react-router-dom";
import { getResponsiveImage } from "../utils/imageHelpers";

function RecipeCard({ id, title, description, image }) {
  const location = useLocation();
  const fromCategorySlug = location.pathname.startsWith("/kategoria/")
    ? location.pathname.split("/").pop()
    : null;
  const fromCategory = fromCategorySlug
    ? decodeURIComponent(fromCategorySlug)
    : null;
  const fromCategoryLabel = fromCategory
    ? fromCategory
        .split(/[-_\s]+/)
        .map(
          (part) => part.charAt(0).toLocaleUpperCase("pl-PL") + part.slice(1)
        )
        .join(" ")
    : null;

  const linkState = {
    from: location.pathname,
  };

  if (fromCategory) {
    linkState.fromCategory = fromCategory;
    linkState.fromCategoryLabel = fromCategoryLabel;
  }

  const responsiveImage = getResponsiveImage(image);

  return (
    <Link to={`/przepisy/${id}`} state={linkState} className="block group">
      <div className="group text-wrap flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="aspect-3/2 overflow-hidden">
          <img
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes={responsiveImage.sizes}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className=" p-4 flex flex-col truncate">
          <h3 className="text-base font-bold truncate">{title}</h3>
          <p className="mt-1 text-sm truncate">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
