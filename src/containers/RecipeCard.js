import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import { getRecipesError, getRecipes, getRecipesPending } from '../reducers/RecipesReducer';
import fetchRecipesActions from '../api/spoonacular';
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
      <div>
        <Spinner animation="grow" />
      </div>
    );
  }
  if (recipes.length === 1) {
    return <Recipe recipe={recipes[0]} />;
  }

  return (
    <div>
      <Spinner animation="grow" />
    </div>
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
