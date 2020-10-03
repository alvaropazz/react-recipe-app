import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './Recipe.css'

const Recipe = ({ recipe }) => (
  <div class="recipe-container">
    <div>
      <img src={recipe.image} alt={recipe.title} />
    </div>

    <div>
      <h1>{recipe.title}</h1>
      <h2>Description:</h2>
      {ReactHtmlParser(recipe.summary)}
      <div>
        <Link to="/">
          <p>HOME</p>
        </Link>
      </div>
    </div>
  </div>
);
Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Recipe;
