import React from "react";


function CategoryFilter({ categories, onCategoryChange, selectedCategory }) {


  function onCategoryClick(category) {
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >{category}</button>))}
    </div>
  );
}

export default CategoryFilter;

