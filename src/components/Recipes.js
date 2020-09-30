import React from 'react';

const Recipes = ({ title, calories, image }) => (
  <div>
    <h1>{title}</h1>
    <p>{calories}</p>
    <img src={image} alt="food" />
  </div>
);

export default Recipes;
