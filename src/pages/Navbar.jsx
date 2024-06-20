import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-5 bg-transparent shadow-md">
      <div className="text-2xl font-bold">GO FOOD</div>
      <ul className="flex space-x-8">
        <li className="cursor-pointer">
          Home
          <KeyboardArrowDownOutlinedIcon />
        </li>
        <li className="cursor-pointer">
          Groceries
          <KeyboardArrowDownOutlinedIcon />
        </li>
        <li className="cursor-pointer">
          Pages
          <KeyboardArrowDownOutlinedIcon />
        </li>
      </ul>
      <div className="flex space-x-4">
        <SearchOutlinedIcon className="cursor-pointer" />
        <PermIdentityOutlinedIcon className="cursor-pointer" />
        <FavoriteBorderOutlinedIcon className="cursor-pointer" />
        <ShoppingBagOutlinedIcon className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
