import React, { Component } from 'react';

import axios from 'axios';
class Home extends Component {
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
      <ul>
        { this.state.persons.map(person => <li>{person.full_name}</li>)}
      </ul>
      </div>
    );
  }
}

export default Home;
