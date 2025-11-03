import useRecipesContext from "../contexts/useRecipesContext";
import { getResponsiveImage } from "../utils/imageHelpers";

export default function RecipeDetail({ recipe, onBack, locationState }) {
  const { favorites = [], toggleFavourites } = useRecipesContext();

  if (!recipe)
    return (
      <p className="text-center text-textSecondary">Nie znaleziono przepisu.</p>
    );

  const isFavourite = favorites?.includes?.(recipe.id) ?? false;
  const categoryLabel = locationState?.fromCategoryLabel;
  const decodedCategory = locationState?.fromCategory
    ? decodeURIComponent(locationState.fromCategory)
    : null;
  const resolvedCategory = categoryLabel || decodedCategory;
  const backLabel = resolvedCategory
    ? `Wróć do kategorii ${resolvedCategory}`
    : locationState?.from === "/"
    ? "Wróć do strony głównej"
    : "Wróć do przepisów";
  const responsiveImage = getResponsiveImage(recipe.image);
  return (
    <main className="flex-1">
      {/* Hero */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-black/35"></div>
        <img
          alt={recipe.title}
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <h1 className="text-5xl tracking-tight text-center">
            {recipe.title}
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-gray-200 font-medium">
            {recipe.description}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back & Actions */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={onBack}
            className="flex font-medium items-center gap-2 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            {backLabel}
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleFavourites(recipe.id)}
              className="flex w-33 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-white font-bold hover:bg-bg-secondary hover:text-primary transition-colors justify-center"
            >
              <span className="material-symbols-outlined">
                {isFavourite ? "heart_check" : "favorite"}
              </span>
              {isFavourite ? "Polubiony" : "Lubię"}
            </button>
            <button className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-tricary transition-colors">
              <span className="material-symbols-outlined">print</span>
              Drukuj
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-medium tracking-wider">Przepis:</h2>
            <ol className="prose prose-lg mt-6 max-w-none list-decimal space-y-6 pl-6">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="space-y-8">
            {/* Times */}
            <div>
              <h3 className="text-xl tracking-tight font-medium">
                Czas przygotowania
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 place-items-center text-center">
                <div className="rounded-lg bg-bg-secondary p-4 ">
                  <div className="text-sm font-medium py-2 text-text-secondary">
                    Przygotow.
                  </div>
                  <div className="text-xl font-medium ">{recipe.prepTime}</div>
                </div>
                <div className="rounded-lg bg-bg-secondary p-4">
                  <div className="text-sm font-medium py-2 text-text-secondary">
                    Gotowanie
                  </div>
                  <div className="text-xl font-medium">{recipe.cookTime}</div>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl tracking-tight font-medium">Składniki</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
