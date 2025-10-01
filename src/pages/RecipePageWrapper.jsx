import { useLocation, useNavigate, useParams } from "react-router-dom";
import useRecipesContext from "../contexts/useRecipesContext.js";
import RecipePage from "./RecipePage.jsx";

function RecipePageWrapper() {
  const { id } = useParams();
  const { recipes } = useRecipesContext();
  const navigate = useNavigate();
  const location = useLocation();
  const recipe = recipes.find((r) => r.id === id);

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from, { replace: true });
      return;
    }

    navigate("/przepisy", { replace: true });
  };

  return (
    <RecipePage
      recipe={recipe}
      onBack={handleBack}
      locationState={location.state}
    />
  );
}

export default RecipePageWrapper;
