import React, { useState } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPDATE_DOG = gql`
mutation UpdateDog($breed: String!, $age: Int!){
    updateDog(breed: $breed, age: $age){
      breed
      id
      age
    }}
    `;

const EditDog = (props) => {
    
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState(0)
    return (
    <Mutation mutation={UPDATE_DOG}>
      {(updateDog) => {
        return (
          <form onSubmit={async e => {
            e.preventDefault()
            await updateDog({ variables: { breed: breed, age: parseInt(age) } })
            await window.location.replace('/')
          }}>
            <input type='text' placeholder='Breed' onChange={e => setBreed(e.target.value)} />
            <input type='number' placeholder='Age' onChange={e => setAge(e.target.value)} />

            <button type="submit">Update</button>
          </form>
        )

      }}



    </Mutation>
  )
}

export default EditDog