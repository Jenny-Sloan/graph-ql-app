import React, { useState } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_DOG = gql`
  mutation CreateDog($breed: String!, $age: Int!){
  addDog(breed: $breed, age: $age){
    breed
    id
    age
  }}
`;

const NewDog = () => {

  const [breed, setBreed] = useState("")
  const [age, setAge] = useState(0)
  console.log(breed, age)
  return (
    <Mutation mutation={ADD_DOG}>
      {(addDog) => {


        return (
          <form onSubmit={async e => {
            e.preventDefault()
            await addDog({ variables: { breed: breed, age: parseInt(age) } })
            // console.log(data)
            await window.location.replace('/')
          }}>
            <input type='text' placeholder='Breed' onChange={e => setBreed(e.target.value)} />
            <input type='number' placeholder='Age' onChange={e => setAge(e.target.value)} />

            <button type="submit">Submit It</button>
          </form>
        )

      }}



    </Mutation>
  )
}

export default NewDog