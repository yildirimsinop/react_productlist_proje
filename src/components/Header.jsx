import React from "react";
import "../../src/index.css";

const Header = ({ categories, onCategoryClick }) => {
  return (
    <div>
      <h1 className="text-align-center header-title">Products List</h1>
      <ul className="category-container">
        {categories.map((category, index) => (
          <li
            key={index}
            className="categoryItem"
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
