import { combineReducers } from 'redux';
import { recipesReducer } from './RecipesReducer';
import { filterType } from './FilterReducer';

const rootReducer = combineReducers({
  data: recipesReducer,
  filter: filterType,
});

export default rootReducer;
