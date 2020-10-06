const GET_RECIPES_PENDING = 'GET_RECIPES_PENDING';
const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
const GET_RECIPES_ERROR = 'GET_RECIPES_ERROR';
const GET_RECIPE_PENDING = 'GET_RECIPE_PENDING';
const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
const GET_RECIPE_ERROR = 'GET_RECIPE_ERROR';
const FILTER_TYPE = 'FILTER_TYPE';

const fetchRecipesPending = () => ({
  type: GET_RECIPES_PENDING,
});

const fetchRecipesSuccess = data => ({
  type: GET_RECIPES_SUCCESS,
  recipes: data,
});

const fetchRecipesError = error => ({
  type: GET_RECIPES_ERROR,
  error,
});

const fetchRecipePending = () => ({
  type: GET_RECIPE_PENDING,
});

const fetchRecipeSuccess = recipe => ({
  type: GET_RECIPE_SUCCESS,
  recipes: recipe,
});

const fetchRecipeError = error => ({
  type: GET_RECIPE_ERROR,
  error,
});

const changeType = type => ({
  type: FILTER_TYPE,
  category: type,
});

export {
  GET_RECIPES_PENDING,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  GET_RECIPE_ERROR,
  GET_RECIPE_PENDING,
  GET_RECIPE_SUCCESS,
  FILTER_TYPE,
  fetchRecipesPending,
  fetchRecipesSuccess,
  fetchRecipesError,
  fetchRecipeError,
  fetchRecipePending,
  fetchRecipeSuccess,
  changeType,
};
