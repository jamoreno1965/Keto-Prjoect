import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component { 
  render() {
    return (
      <div className="App">
       <h1 className="title">Keto Project</h1>
       <Navbar/>
       <p></p>
      </div>
    );
  }
}

export default App;
