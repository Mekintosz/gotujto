import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes-list.js";
import RecipePage from "./RecipePage";

function RecipePageWrapper() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);
  return <RecipePage recipe={recipe} />;
}

export default RecipePageWrapper;
