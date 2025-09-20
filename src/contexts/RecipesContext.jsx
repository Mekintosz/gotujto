import { createContext, useEffect, useState } from "react";
import useRecipes from "../hooks/useRecipes";

const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  // Favourite state
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify("favourities"));
  }, [favourites]);

  //toggle favourites by recipe id
  function toggleFavourites(id) {
    setFavourites((prev) =>
      prev.includes(id) ? prev.folter((fid) => fid !== id) : [...prev, id]
    );
  }

  const { recipes, loading, error } = useRecipes();
  return (
    <RecipesContext.Provider
      value={{ recipes, loading, error, favourites, toggleFavourites }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
