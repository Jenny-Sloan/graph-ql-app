import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import DogGone from './DeleteDog'
import EditDog from './UpdateDog'

const GET_DOGS = gql`
  {
    dogs {
      id
      age
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <> 
        {/* <select name="dog" onChange={onDogSelected}> */}
         {/* // {data.dogs.map(dog => ( 
          //   <option key={dog.id} value={dog.breed}>
          //     {dog.breed}
          //   </option>
          // ))} */}
        {/* </select> */}
        {data.dogs.map(dog => (
          <li key={dog.id} value={dog.breed}>
           <h3> Breed:  {dog.breed} {" "} </h3>
           <h3>Age: {dog.age} {" "} </h3>
           <h3>ID: {dog.id} </h3>
           <DogGone id={dog.id}/>
           <EditDog key={dog.id} value={dog.breed}/>
          </li>
        ))}
        </>
      );
    }}
  </Query>
);

export default Dogs