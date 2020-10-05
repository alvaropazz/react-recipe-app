/* eslint-disable import/no-named-as-default */
import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import store from '../utils/store';

describe('RecipeList testing', () => {
  const mockFetchRecipesFn = jest.fn();
  let data = {
    error: null,
    pending: true,
    recipes: [],
  };
  beforeEach(() => {
    mount(
      <Router>
        <RecipeList store={store} data={data} filter="salad" fetchRecipes={mockFetchRecipesFn} />
      </Router>,
    );
  });

  it('should call the mock fetch recipes function to populate data', () => {
    expect(mockFetchRecipesFn.mock.calls.length).toBe(0);
  });

  it('renders "..." while waiting for data', () => {
    data = {
      pending: true,
    };
    const wrapper = mount(
      <Router>
        <RecipeList store={store} data={data} filter="salad" fetchRecipes={mockFetchRecipesFn} />
      </Router>,
    );
    expect(wrapper.find('.waiting').text()).toBe('...');
  });
});
