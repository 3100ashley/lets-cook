import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function MyRecipes() {
  const [recipes, setRecipes] = useState();
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


  return (
    <>
      <h1 className="text-center">Created Recipes</h1>
      <div className="flex flex-wrap gap-y-10 justify-evenly mx-10">
        {recipes &&
          recipes.map((recipe) => {
            return <RecipeCard width="w-72" img={recipe.image}>
                <Card.Title>{recipe.name}</Card.Title>
                <Button variant="dark" href={"/createdrecipe/" + recipe.id}>
                  Go to recipe
                </Button>
            </RecipeCard>;
          })}
      </div>
    </>
  );
}
