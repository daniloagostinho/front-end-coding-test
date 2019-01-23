import React from 'react';
import List from '../../components/List';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Course from './Course';

export default ({ repositories }) => (
    <React.Fragment>
        <h1>Repositórios</h1>
        <List repositories={repositories} />

        <Query
    query={gql`
      {
        allCourses {
          id
          title
          author
          description
          topic
          url
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.allCourses.map(({ id, title, author, description, topic, url }) => (
        <div key={id}>
          <p>{`${title} by ${author}`}</p>
        </div>
      ));
    }}
  </Query>
    </React.Fragment>
);
