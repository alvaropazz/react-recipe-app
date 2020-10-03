import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ recipe }) => (
  <li>
    <Link to={`/recipe/${recipe.id}`}>
      <div className="each-container">
        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <h2 className="recipe-title">{recipe.title.toUpperCase()}</h2>
      </div>
    </Link>
  </li>
);

Display.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Display;
