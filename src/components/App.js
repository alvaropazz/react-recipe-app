import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes';

const App = () => {
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
      <form
        className="search"
        onSubmit={getSearch}
      >
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={updateSearch}
        />
        <input className="search-button" type="submit" />
      </form>
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

export default App;
