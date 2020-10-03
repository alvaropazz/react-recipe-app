/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import RecipeCard from '../containers/RecipeCard';
import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <Link to="/">
        <h1 className="title">RECIPE APP</h1>
      </Link>
      <div>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeCard} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
