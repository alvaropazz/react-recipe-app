import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import fetchRecipesActions from '../utils/spoonacular';
import { getRecipesError, getRecipes, getRecipesPending } from '../reducers/RecipesReducer';
import { getRecipeType } from '../reducers/FilterReducer';
import Display from '../components/Display';
import Filter from '../components/Filter';

export class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes('normal');
  }

  handleFilterChange(e) {
    const { fetchRecipes } = this.props;
    if (e.target.value !== '') {
      fetchRecipes(e.target.value);
    }
    e.preventDefault();
  }

  render() {
    const { data, filter } = this.props;
    const { error, pending, recipes } = data;
    if (error) {
      return (
        <div className="error">
          {error}
        </div>
      );
    }

    if (pending) {
      return (
        <h1>...</h1>
      );
    }

    if (recipes.length < 2) {
      return (
        <h1>...</h1>
      );
    }

    return (
      <div>
        <Filter onClick={this.handleFilterChange} category={filter} />
        <ul>
          <div>
            {recipes.map(recipe => (
              <Display
                key={recipe.id}
                recipe={recipe}
              />
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRecipes: fetchRecipesActions.fetchRecipes,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getRecipesError(state.data),
    recipes: getRecipes(state.data),
    pending: getRecipesPending(state.data),
  },
  filter: getRecipeType(state.filter),
});

RecipeList.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
    recipes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  filter: PropTypes.string.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
