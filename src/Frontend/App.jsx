import React, { Component } from 'react';
import './css/App.css';
// Components
import NavBar from './component/NavBar/NavBar';
import Twitter from './component/Twitter/Twitter';
import RouteChecker from './component/RouteChecker/RouteChecker';
import Cards from './component/Cards/Cards';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <RouteChecker />
        <Cards />
        <Twitter />
      </div>
    );
  }
}

export default App;
