import React, { Component } from 'react';
import './App.css';
import Pokecard from "./Components/Pokecard"


class App extends Component {
  render() {
    return (
    <div className="App">
      <Pokecard 
        id={4}
        name="Charmander"
        type="Fire"
        exp={62}
      />
    </div>
    );
  } 
}


export default App;