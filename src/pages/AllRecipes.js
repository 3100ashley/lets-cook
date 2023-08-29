import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function AllRecipes() {
  let { ingredient } = useParams();
  const [meals, setMeals] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const jsonData = await response.json();
        setMeals(jsonData.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [ingredient]);

  return (
    <>
      <h1 className="text-center mb-10">{ingredient} recipes</h1>
      <div className="flex flex-wrap gap-y-10 justify-evenly mx-24">
        {meals &&
          meals.map((meal) => {
            return (
              <RecipeCard
                key={meal.idMeal}
                img={meal.strMealThumb}
                width="w-72"

              >
                <Card.Title>{meal.strMeal}</Card.Title>
                <Button variant="dark" href={"/recipe/" + meal.idMeal}>
                  Go to recipe
                </Button>
              </RecipeCard>
            );
          })}
      </div>
    </>
  );
}
