import {
  fetchRecipesPending,
  fetchRecipesSuccess,
  fetchRecipesError,
  fetchRecipeError,
  fetchRecipePending,
  fetchRecipeSuccess,
  changeType,
} from '../actions/index';

const key = 'e58f966470464622b23fe6ed8e79d89d'

const recipesType = async type => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=${key}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const recipeProps = async id => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${key}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const fetchRecipes = type => async dispatch => {
  dispatch(fetchRecipesPending());
  try {
    const response = await recipesType(type);
    const recipesData = await Promise.all(response.results);
    const recipes = recipesData.map(data => ({
      title: data.title,
      image: data.image,
      id: data.id,
    }));
    dispatch(fetchRecipesSuccess(recipes));
    dispatch(changeType(type));
    return response;
  } catch (e) {
    dispatch(fetchRecipesError(e));
    return e;
  }
};

const fetchRecipe = id => async dispatch => {
  dispatch(fetchRecipePending());
  try {
    const response = await recipeProps(id);
    const recipe = {
      title: response.title,
      summary: response.summary,
      cuisines: response.cuisines,
      image: response.image,
      id: response.id,
    };
    dispatch(fetchRecipeSuccess(recipe));
    return recipe;
  } catch (e) {
    dispatch(fetchRecipeError(e));
    return e;
  }
};

export default {
  fetchRecipes,
  fetchRecipe,
};
