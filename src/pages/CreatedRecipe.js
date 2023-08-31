import { useParams, useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
export default function MyRecipe() {

  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/${recipeId}`);
        const jsonData = await response.json();
        setRecipe(jsonData.recipe);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {recipe && (
        <div>
          <h1 className="text-center"> {recipe.name}</h1>
          <div className="flex justify-center mx-10">
            <RecipeCard img={recipe.image} width="max-w-3xl">
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients.map((ingredient) => {
                  return <li>{ingredient}</li>;
                })}
              </ul>
              <p>{recipe.instructions}</p>
              <button
                className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={() => {
                  const URL = `http://localhost:8000/${recipeId}`;
                  fetch(URL, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Something went wrong");
                      }
                      navigate("/createdrecipes")
                    })
                    .catch((e) => console.log(e));
                }}
              >
                Delete
              </button>
            </RecipeCard>
          </div>
        </div>
      )}
    </>
  );
}
