import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ListRepository from './ListRepository';
class Home extends Component {

  render() {
    return (
      <div>

      <NavLink exact to="/url">Menu item</NavLink>
      <Route exact path="/url" component={ListRepository} />

      </div>

    );
  }
}

export default Home;
