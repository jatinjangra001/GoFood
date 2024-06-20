import React from "react";
import Pizza from "../assets/pizza.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center p-10">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-green-300" />
      <div className="relative z-10 max-w-lg ml-10 md:ml-20">
        <h4 className="text-green-600 mb-2">Discount up to 20%</h4>
        <h1 className="text-4xl font-bold mb-4">
          Buy Fresh And Organic Grocery Food
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit
          purus nec nibh tortor ipsum. Placerat consequat lorem.
        </p>
        <button className="px-5 py-2 bg-green-800 text-white rounded-md mb-4">
          Shop Now
        </button>
        <div className="flex space-x-10">
          <div className="text-center">
            <span className="block text-2xl font-bold">35k +</span>
            <p className="text-gray-600">Users</p>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold">18k +</span>
            <p className="text-gray-600">Products</p>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-md mt-6 md:mt-0 md:ml-10 lg:mr-20">
        <img src={Pizza} alt="Organic Food" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
