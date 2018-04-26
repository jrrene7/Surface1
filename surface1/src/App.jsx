import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/Details" component={Details} />
        <Route path="/Profile" component={Profile} />
      </div>
     </Router>
    );
  }
}

export default App;
