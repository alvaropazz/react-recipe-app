import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './Recipe.css';

const Recipe = ({ recipe }) => (
  <div className="recipe-container">
    <div>
      <img src={recipe.image} alt={recipe.title} />
    </div>

    <div className="each-container">
      <h1 className="each-title">{recipe.title}</h1>
      <h2 className="each-description">Description:</h2>
      {ReactHtmlParser(recipe.summary)}
      <div>
        <Link to="/">
          <p className="go-back">HOME</p>
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
