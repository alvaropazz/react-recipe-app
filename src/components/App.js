import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = '08ea9dbd';
  const APP_KEY = 'f405c346e1efd5fca2e0fac943f9a93e';

  useEffect(() => {
    recipes();
  }, []);

  const recipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="app">
      <form className="search">
        <input className="search-bar" type="text" placeholder="Search..." />
        <input className="search-button" type="submit" />
      </form>
    </div>
  );
};

export default App;
