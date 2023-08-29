import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailRecipeCard from "../components/DetailRecipeCard";
export default function Recipe(props) {
  const { recipeId } = useParams();
  const [mealData, setMealData] = useState(null);
  const [ingredients, setIngredients] = useState()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const jsonData = await response.json();
        setMealData(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    
  }, []);

  useEffect(()=> {
    if(mealData){
        formatRecipe(mealData)
    }
    console.log(ingredients)
  },[mealData])

  function formatRecipe(mealInfo){
    const ingredientsArr = []
    const measurementsArr = []
    const data = []
    for(const key in mealInfo){
        if(key.includes('Ingredient') && mealInfo[key]){
            ingredientsArr.push({[key]: mealInfo[key]})

        }else if(key.includes('Measure') && mealInfo[key]){
            measurementsArr.push({[key]: mealInfo[key]})
        }
    }
    
    //connect the two arrays to match the ingredient to the measurment
    for(let i = 0; i < measurementsArr.length; i++){
        let ingredientObj = ingredientsArr[i]
        for(const key in ingredientObj){
            measurementsArr[i][key] = ingredientObj[key]
        }
     
    }

    for(let i = 0; i < measurementsArr.length; i++){
        let fullIngredient="";
        for(const key in measurementsArr[i]){
            fullIngredient += `${measurementsArr[i][key]} `
        }
       data.push(fullIngredient);
        
    }

    setIngredients(data)

  }

  return (
    <>
      <h1 className="text-center">{mealData && mealData.strMeal}</h1>
      <div className="flex justify-center mx-10">
      {mealData && ingredients && <DetailRecipeCard img={mealData.strMealThumb} instructions={mealData.strInstructions} ingredients={ingredients} youtube={mealData.strYoutube}/>}
      </div>
    </>
  );
}
