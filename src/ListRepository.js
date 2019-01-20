import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router';

class ListRepository extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    // lista repositorios por reactjs
    const userDefaault = 'reactjs';
  axios.get(`https://api.github.com/users/${userDefaault}/repos`)
      .then(res => {
        console.log(res)
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })
  }
  render() {
    return (
      <div>

      <h1>Repositorios para usuario Reactjs</h1>

      <ul>
      { this.state.persons.map(person => <li>Menu item{person.full_name}</li>)}
      </ul>
      </div>
    );
  }
}

export default ListRepository;
