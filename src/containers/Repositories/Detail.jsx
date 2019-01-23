import React, { Component } from 'react';
import axios from 'axios';

import ProjectDetails from '../../components/ProjectDetails';

class DetailRepository extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
        <React.Fragment>
          <h1>Detalhes do repositório</h1>
          <ProjectDetails />
        </React.Fragment>
    );
  }
}

export default DetailRepository;
