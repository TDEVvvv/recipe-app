import React from "react";
import RecipeCard from "./RecipeCard";

const Recipe = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe.recipe} key={index} />
      ))}
    </div>
  );
};

export default Recipe;
