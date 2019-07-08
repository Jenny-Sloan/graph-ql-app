import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const DELETE_DOG = gql`
  mutation DeleteDog($id: String){
  deleteDog(id: $id){
    id
  }}
`;

const DogGone = (props) => {
    return (
        <Mutation mutation={DELETE_DOG}>
            {(deleteDog, { data }) => {


                return (
                    <form onSubmit={async e => {
                        e.preventDefault()
                        console.log(props.id)
                        await deleteDog({ variables: {
                             id:props.id
                            } })
                            await window.location.replace('/')
                    }}>
                    <button type="submit" value="delete"> Delete </button>
                    </form>
                )

            }}
    
    
    
        </Mutation >
      )
    }

export default DogGone