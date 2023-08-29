import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes";
import Recipe from "./pages/Recipe";
import MyRecipes from "./pages/CreatedRecipes";
import MyRecipe from "./pages/CreatedRecipe";
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allrecipes/:ingredient" element={<AllRecipes />} />
            <Route path="/recipe/:recipeId" element={<Recipe/>}/>
            <Route path="/createdrecipes" element={<MyRecipes/>}/>
            <Route path="/createdrecipe/:recipeId" element={<MyRecipe/>}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
