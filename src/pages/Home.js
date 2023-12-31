import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        );
        const jsonData = await response.json();
        setData(jsonData.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-16">Let's look up a meal!</h1>
      <div className="flex flex-wrap gap-y-10 justify-evenly mx-24">
        {data &&
          data.map((meal) => {
            return (
              <RecipeCard key={meal.idMeal} img={meal.strMealThumb} width="w-72">
                <Card.Title>{meal.strMeal}</Card.Title>
                <Button variant="dark" href={"/recipe/" + meal.idMeal}>
                  Go to recipe
                </Button>
              </RecipeCard>
            );
          })}
      </div>
    </div>
  );
}
