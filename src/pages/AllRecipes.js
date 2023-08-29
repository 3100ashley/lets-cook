import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/RecipeCard";
import RecipeCard from "../components/RecipeCard";

export default function AllRecipes() {
  let { ingredient } = useParams();
  const [meals, setMeals] = useState();
  useEffect(() => {
    async function fetchData() {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const jsonData = await response.json();
          setMeals(jsonData.meals);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
  }, [ingredient]);

  return (
    <>
    <div className="flex flex-wrap gap-y-10 justify-evenly mx-24">
     {meals && meals.map((meal)=>{
        return <RecipeCard key={meal.id} img={meal.strMealThumb} title={meal.strMeal}/>
     })}
     </div>
    </>
  );
}
