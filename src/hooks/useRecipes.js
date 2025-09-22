import { useEffect, useState } from "react";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    async function fetchRecipes() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/recipes.json", { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();

    return () => {
      abortController.abort();
    };
  }, []);

  return { recipes, loading, error };
}
