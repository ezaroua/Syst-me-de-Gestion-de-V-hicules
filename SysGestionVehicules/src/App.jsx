import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react';
import Garage from './components/Garage';

class App extends Component {
  render() {
    return (
      <div id="root">
        <h1>Gestion de la Collection de Véhicules</h1>
        <Garage />
      </div>
    );
  }
}

export default App;
