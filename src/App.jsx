import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import FoodCategories from "./pages/FoodCategories";
import CategoryDetail from "./pages/CategoryDetail";
import "./index.css";
import SearchMeal from "./pages/SearchMeal";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="inset-0 bg-gradient-to-r from-white to-green-300">
          <Navbar />
          <Hero />
        </div>
        <div className="flex flex-row items-center justify-center h-full">
          <SearchMeal />
        </div>
        <Routes>
          <Route path="/" element={<FoodCategories />} />
          <Route path="/category/:categoryName" element={<CategoryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
