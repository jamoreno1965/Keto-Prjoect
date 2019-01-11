import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component { 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Route path='/' component={Home}/>     
       <Route path='/about' component={About}/>     
       <Route path='/contact' component={Contact}/>     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
