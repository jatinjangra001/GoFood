import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Modal from "./Modal";

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [categoryFoods, setCategoryFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

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

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        if (response.data.meals) {
          setCategoryFoods(response.data.meals);
        }
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    };

    fetchCategoryDetails();
  }, [categoryName]);

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      setSelectedMeal(response.data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  if (categoryFoods.length === 0) {
    return <p>Loading...</p>;
  }

  const selectedCategory = categories.find(
    (category) => category.strCategory === categoryName
  );

  if (!selectedCategory) {
    return <p>Category not found</p>;
  }

  return (
    <div className="px-4 py-8">
      <Link
        to="/"
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
      >
        Back to Categories
      </Link>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={selectedCategory.strCategoryThumb}
              alt={selectedCategory.strCategory}
              className="object-cover mr-4 rounded-lg mb-4 md:mb-0"
              style={{ height: "20rem", width: "auto" }}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">
                {selectedCategory.strCategory}
              </h3>
              <p className="text-gray-600 mb-4 md:mb-0">
                {selectedCategory.strCategoryDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryFoods.map((food) => (
            <div
              key={food.idMeal}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => fetchMealDetails(food.idMeal)}
            >
              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold">{food.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedMeal && (
        <Modal
          show={selectedMeal !== null}
          onClose={() => setSelectedMeal(null)}
        >
          <h2 className="text-2xl font-bold mb-2">{selectedMeal.strMeal}</h2>
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-full h-64 object-cover mb-2"
          />
          <div className="overflow-y-auto max-h-64">
            {selectedMeal.strInstructions.split("STEP").map((step, index) => (
              <p key={index} className="mb-2">
                {index > 0 && <span className="font-bold">STEP</span>}{" "}
                {step.trim()}
              </p>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CategoryDetail;
