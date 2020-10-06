import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = props => {
  const mealTypes = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink',
  ];

  const { onClick, category } = props;
  return (
    <div>
      <select name="category" value={category} onChange={e => onClick(e)}>
        <option value="">SELECT MEAL TYPE</option>
        {mealTypes.map(type => (<option key={type} value={type}>{type}</option>))}
      </select>
    </div>
  );
};

Filter.defaultProps = {
  category: 'main course',
};

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default Filter;
