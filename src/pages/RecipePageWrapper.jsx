import { useParams } from "react-router-dom";
import useRecipesContext from "../contexts/useRecipesContext.js";
import RecipePage from "./RecipePage";

function RecipePageWrapper() {
  const { id } = useParams();
  const { recipes } = useRecipesContext();
  const recipe = recipes.find((r) => r.id === id);

  return <RecipePage recipe={recipe} />;
}

export default RecipePageWrapper;
