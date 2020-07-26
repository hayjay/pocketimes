import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      // wrap the entire div class App inside the BrowserRouter element so the entire application can make use of react router
      <BrowserRouter> 
        <div className="App">
          <Navbar/>
          {/* load in our route library */}
          {/* Whenever a user is on the / route, display the Home component */}
          <Route exact path="/" path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App;
