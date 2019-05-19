import React, { Component } from 'react';
import './css/App.css';
// Components
import NavBar from './component/NavBar/NavBar';
import Twitter from './component/Twitter/Twitter';
import RouteChecker from './component/RouteChecker/RouteChecker';
import Cards from './component/Cards/Cards';
import UsefulLinks from './component/UsefulLinks/UsefulLinks';
import AboutUs from './component/About/AboutUs';
import Footer from './component/Footer/Footer_get';

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
        <UsefulLinks />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
