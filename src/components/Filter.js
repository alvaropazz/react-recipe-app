import React from 'react';
import PropTypes from 'prop-types';

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
      <h3>
        Meal Type:
        <span className="ml-2">
          <select name="category" value={category} onChange={e => onClick(e)}>
            <option value="">Select category</option>
            {mealTypes.map(type => (<option key={type} value={type}>{type}</option>))}
          </select>
        </span>
      </h3>
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
