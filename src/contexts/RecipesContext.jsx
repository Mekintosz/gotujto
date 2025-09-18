import { createContext } from "react";
import useRecipes from "../hooks/useRecipes";

const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const { recipes, loading, error } = useRecipes();
  return (
    <RecipesContext.Provider value={{ recipes, loading, error }}>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
