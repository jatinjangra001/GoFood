import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FoodCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return `${description.substr(0, maxLength)}...`;
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Food Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-auto object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">{category.strCategory}</h3>
            <p className="text-gray-600 mb-4">
              {truncateDescription(category.strCategoryDescription, 150)}
            </p>
            <Link
              to={`/category/${category.strCategory}`} // Pass category name in URL
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
