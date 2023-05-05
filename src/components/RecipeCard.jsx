import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className=" bg-white shadow-md p-10 shadow-sky-500 flex flex-col ">
      <h2 className="text-center text-3xl font-spartan font-bold">
        {recipe.label}
      </h2>
      <img src={recipe.image} alt="food" />
      {recipe.ingredients.map((ingredient, index) => (
        <p key={index}>{`${index + 1}. ${ingredient.text}`}</p>
      ))}
    </div>
  );
};

export default RecipeCard;
