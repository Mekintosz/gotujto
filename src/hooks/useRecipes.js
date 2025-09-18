import { useEffect, useState } from "react";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // prevent state updates if component unmounts

    async function fetchRecipes() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/recipes.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setRecipes(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRecipes();

    return () => {
      isMounted = false;
    };
  }, []);

  return { recipes, loading, error };
}
