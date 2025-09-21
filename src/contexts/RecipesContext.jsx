import { createContext, useEffect, useState } from "react";
import useRecipes from "../hooks/useRecipes";

const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const { recipes, loading, error } = useRecipes();

  // Favourite state
  const [favorites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favorites));
  }, [favorites]);

  //toggle favourites by recipe id
  function toggleFavourites(id) {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }

  return (
    <RecipesContext.Provider
      value={{ recipes, loading, error, favorites, toggleFavourites }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
