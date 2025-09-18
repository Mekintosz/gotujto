import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecipesProvider } from "./contexts/RecipesContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </StrictMode>
);
