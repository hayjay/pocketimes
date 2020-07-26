import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      // wrap the entire div class App inside the BrowserRouter element so the entire application can make use of react router
      <BrowserRouter> 
        <div className="App">
          <Navbar/>
          {/* load in our route library */}
          {/* Whenever a user is on the / route, display the Home component */}
          {/* Use switch to avoid url matching like visiting /contact and /post_id(/1) would load both contact and post details page together */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App;
