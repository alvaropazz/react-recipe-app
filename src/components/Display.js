import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Display = ({ recipe }) => (
  <li>
    <Link to={`/recipe/${recipe.id}`}>
      <div>
        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <p>{recipe.title}</p>
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
