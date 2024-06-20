import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const MealSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const searchMealByName = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setSearchResults(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      searchMealByName();
      setSearchTerm(""); // Reset search term after search
    }
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
  };

  const handleCloseResults = () => {
    setSearchResults([]);
  };

  const formatInstructions = (instructions) => {
    return instructions.split("STEP").map((step, index) => (
      <p key={index} className="mb-2">
        {index > 0 && <span className="font-bold">STEP</span>} {step.trim()}
      </p>
    ));
  };

  return (
    <div className="flex flex-col items-center container mx-auto mt-4">
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search meal by name..."
          className="border p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Search
        </button>
        {searchResults.length > 0 && (
          <button
            type="button"
            onClick={handleCloseResults}
            className="ml-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Close Results
          </button>
        )}
      </form>

      <div className="grid grid-cols-3 gap-4">
        {searchResults.map((meal) => (
          <div
            key={meal.idMeal}
            className="border p-4 rounded cursor-pointer"
            onClick={() => handleMealClick(meal)}
          >
            <h2 className="text-xl font-bold mb-2">{meal.strMeal}</h2>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover mb-2"
            />
          </div>
        ))}
      </div>

      {selectedMeal && (
        <Modal show={selectedMeal !== null} onClose={handleCloseModal}>
          <h2 className="text-2xl font-bold mb-2">{selectedMeal.strMeal}</h2>
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-full h-64 object-cover mb-2"
          />
          <div className="overflow-y-auto max-h-64">
            {formatInstructions(selectedMeal.strInstructions)}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MealSearch;
