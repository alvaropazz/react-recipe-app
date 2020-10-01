import React, { useEffect, useState } from 'react';
import './Display.css';
import Recipes from './Recipes';
import Filter from './Filter'

const Display = () => {
  const APP_ID = '08ea9dbd';
  const APP_KEY = 'f405c346e1efd5fca2e0fac943f9a93e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const fetchRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <div className="app">
      < Filter 
      getSearch={getSearch}
      updateSearch={updateSearch}
      value={search}
      />
      {recipes.map(x => (
        <Recipes
          key={x.recipe.label}
          title={x.recipe.label}
          calories={x.recipe.calories}
          image={x.recipe.image}
        />
      ))}
    </div>
  );
};

export default Display;