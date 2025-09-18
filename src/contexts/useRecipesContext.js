import { useContext } from "react";
import RecipesContext from "./RecipesContext.jsx";

function useRecipesContext() {
  return useContext(RecipesContext);
}

export default useRecipesContext;
