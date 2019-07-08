import React from 'react';
import Dogs from './components/Dogs'
import NewDog from './components/AddDog'


function App() {
  return (
    <div className="App">
      <h1>Welcome to Dogs!</h1>
      <NewDog/>
      <Dogs onDogSelected = {e => console.log(e)}/>
      
    </div>
  );
}

export default App;
