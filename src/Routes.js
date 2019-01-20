import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import ListRepository from './ListRepository';
import RepositoryDetatil from './RepositoryDetatil';



export default (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Route>
</Router>

);
