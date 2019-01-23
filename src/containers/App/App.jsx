import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from 'axios';

import Home from '../Home';
import ListRepository from '../Repositories/List.jsx';
import DetailRepository from '../Repositories/Detail.jsx';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from '../Repositories/Courses'

const client = new ApolloClient({
  uri: "https://api.github.com/graphql"
});


class App extends Component {

  state = {
    orderBy: null,
    user: 'reactjs',
    repositories: [],
    currentRepository: null,
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}/repos`)
      .then(res => { this.setState({ repositories: res.data }); })
  }

  render() {
    return (
      <ApolloProvider client={client}>
      <Courses />
        <Router>
          <React.Fragment>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/repositories" exact component={() => <ListRepository repositories={this.state.repositories} />} />
              <Route path="/repositories/:id" component={() => <DetailRepository repositories={this.state.repositories} />} />
            </Switch>
          </React.Fragment>
        </Router>
        </ApolloProvider>
    );
  }
}

export default App;
