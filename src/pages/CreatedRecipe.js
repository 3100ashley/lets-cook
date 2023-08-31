import { useParams, useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import EditRecipe from "../components/EditRecipe";
export default function MyRecipe() {

  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  function updateRecipe(tempRecipe) {
    const {name, ingredients, instructions, image} = tempRecipe;
    const data = {
      id: Number(recipeId),
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      image: image,
    };
    fetch(`http://localhost:8000/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        toggleShow();
        setRecipe(data.recipe);
      })
      .catch((e) => {
        console.log(e);
      });
  }  
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
              <div className="flex justify-between">
              <EditRecipe updateRecipe={updateRecipe} recipe={recipe} toggleShow={toggleShow} show={show}/>
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
              </div>
            </RecipeCard>
          </div>
        </div>
      )}
    </>
  );
}
