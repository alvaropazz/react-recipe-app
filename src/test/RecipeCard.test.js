/* eslint-disable import/no-named-as-default */
import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeCard from '../containers/RecipeCard';
import store from '../utils/store';

describe('Detailed View testing', () => {
  let wrapper;
  const mockFetchRecipeFn = jest.fn();
  let data = {
    error: null,
    pending: true,
    recipes: [],
  };
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <RecipeCard store={store} data={data} fetchRecipe={mockFetchRecipeFn} />
      </Router>,
    );
  });

  it('should call the mock fetch recipe function to populate data', () => {
    expect(mockFetchRecipeFn.mock.calls.length).toBe(0);
  });

  it('renders "..." while waiting for data', () => {
    data = {
      pending: true,
    };
    const wrapper = mount(
      <Router>
        <RecipeCard store={store} data={data} fetchRecipe={mockFetchRecipeFn} />
      </Router>,
    );
    expect(wrapper.find('.waiting')).toHaveLength(1);
  });

  it('renders single recipe data', () => {
    data = {
      error: null,
      pending: false,
      recipes: [{
        name: '...',
      }],
    };

    wrapper = mount(
      <Router>
        <RecipeCard store={store} data={data} fetchRecipe={mockFetchRecipeFn} />
      </Router>,
    );

    expect(wrapper.find('h1').text()).toBe('...');
  });
});
