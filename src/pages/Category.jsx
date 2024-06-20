import React from "react";
import FoodCategories from "./FoodCategories";

const Category = () => {
  return (
    <div className="text-center p-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        Shop by Category
      </h2>
      <h3 className="text-xl text-gray-600 mb-6">
        Top Category Of Organic Food
      </h3>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <button className="px-4 py-2 bg-gray-100 rounded-md">
          Fruits and Vegetables
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-md">Bakery</button>
        <button className="px-4 py-2 bg-gray-100 rounded-md">
          Meat and Seafood
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-md">Beverage</button>
        <button className="px-4 py-2 bg-gray-100 rounded-md">
          Biscuit and Snacks
        </button>
      </div>
      <FoodCategories />
    </div>
  );
};

export default Category;
