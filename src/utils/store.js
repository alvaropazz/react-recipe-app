import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = [thunk];

const initialState = {
  pending: true,
  pendingRecipe: true,
  recipes: [],
  error: null,
};

const store = createStore(rootReducer, {
  data: initialState,
  filter: 'salad',
}, applyMiddleware(...middleware));

export default store;
