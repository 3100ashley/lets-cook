import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import randomInteger from "random-int";
import AddRecipe from "../components/AddRecipe";
export default function MyRecipes() {
  const [recipes, setRecipes] = useState();
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/`);
        const jsonData = await response.json();
        setRecipes(jsonData.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  function newRecipe(name, ingredients, instructions, image) {
    let number = randomInteger(500);
    const data = {
      id: number,
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      image: image,
    };
    fetch("http://localhost:8000", {
      method: "POST",
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
        console.log(data)
        setRecipes([...recipes, data.recipe]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <div className="flex justify-center flex-col place-items-center mb-10">
        <h1 className="text-center">Created Recipes</h1>
        <AddRecipe newRecipe={newRecipe} show={show} toggleShow={toggleShow} />
      </div>
      <div className="flex flex-wrap gap-y-10 justify-evenly mx-10">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <RecipeCard width="w-72" img={recipe.image}>
                <Card.Title>{recipe.name}</Card.Title>
                <Button variant="dark" href={"/createdrecipe/" + recipe.id}>
                  Go to recipe
                </Button>
              </RecipeCard>
            );
          })}
      </div>
    </>
  );
}
