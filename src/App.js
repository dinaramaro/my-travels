import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes destinations préférées</h1>
        </header>
        <Travel
          destination="Split"
          country="Croatie"
          image="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/03/22182254/Split_XXL-870x400-1.jpg"
          distance="1915 kms"
        />
        <Travel
          destination="Marrakech"
          country="Maroc"
          image="https://www.lebaladin.fr/wp-content/uploads/2018/08/y8g-2441412_bd41caa2.jpg"
          distance="1955 kms"
        />
      </div>
    );
  }
}

export default App;
