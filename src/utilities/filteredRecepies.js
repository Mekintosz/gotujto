const { recipes, loading, error } = useRecipesContext();
const [query, setQuery] = useState("");
const normalizedQuery = (query || "").trim().toLowerCase();

const filteredRecipes = useMemo(() => {
  if (!normalizedQuery) return recipes;

  return recipes.filter((recipe) => {
    const titleMatches = (recipe.title ?? "")
      .toLowerCase()
      .includes(normalizedQuery);
    // Optional: also search ingredients
    // const ingredientsMatches = (recipe.ingredients || []).some(i =>
    //   i.toLowerCase().includes(normalizedQuery)
    // );
    return titleMatches; // or titleMatches || ingredientsMatches
  });
}, [normalizedQuery, recipes]);
