import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getRecipesError, getRecipes, getRecipesPending } from '../reducers/RecipesReducer';
import fetchRecipesActions from '../utils/spoonacular';
import Recipe from '../components/Recipe';

export const RecipeCard = ({ fetchRecipe, data }) => {
  const { error, pending, recipes = [] } = data;

  const { id } = useParams();

  useEffect(() => {
    fetchRecipe(id); // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  if (pending) {
    return (
      <h1 className="waiting">...</h1>
    );
  }
  if (recipes.length === 1) {
    return <Recipe recipe={recipes[0]} />;
  }

  return (
    <h1 className="waiting">...</h1>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRecipe: fetchRecipesActions.fetchRecipe,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getRecipesError(state.data),
    recipes: getRecipes(state.data),
    pending: getRecipesPending(state.data),
  },
});

RecipeCard.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    recipes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  fetchRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
