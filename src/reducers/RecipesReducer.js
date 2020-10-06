import {
  GET_RECIPES_PENDING,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  GET_RECIPE_PENDING,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_ERROR,
} from '../actions/index';

export const recipesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        pending: false,
        recipes: action.recipes,

      };
    case GET_RECIPES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_RECIPE_PENDING:
      return {
        ...state,
        pendingRecipe: true,
      };
    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        pendingRecipe: false,
        recipes: [action.recipes],
      };
    case GET_RECIPE_ERROR:
      return {
        ...state,
        pendingRecipe: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getRecipes = state => state.recipes;
export const getRecipesPending = state => state.pending;
export const getRecipePending = state => state.pendingRecipe;
export const getRecipesError = state => state.error;
