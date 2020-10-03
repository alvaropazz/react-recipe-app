/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import RecipeCard from '../containers/RecipeCard';

const App = () => (
  <Router>
    <div>
      <Link to="/">
        <p>HOME</p>
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
