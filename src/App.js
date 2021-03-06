import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Banner />
        </div>
    );
  }
}

export default App;
