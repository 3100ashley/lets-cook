import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes";
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allrecipes/:ingredient" element={<AllRecipes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
