{/* eslint-disable react/prefer-stateless-function
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import './css/App.css';
import { Link } from 'react-router';
// Components
import HomePage from './component/Home/Home';
import AccesibilityServicesPage from './component/AccesibilityServices/AccesibiltyServices';
import DetailsPage from './component/Details/Details';
import UsefulLinksPage from './component/UsefulLinks/UsefulLinks';
import AboutUsPage from './component/AboutUs/AboutUs';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/AccesibilityServices" component={AccesibilityServicesPage} />
            <Route exact path="/Details" component={DetailsPage} />
            <Route exact path="/UsefulLinks" component={UsefulLinksPage} />
            <Route exact path="/AboutUs" component={AboutUsPage} />
          </Switch>
        </Router>
      </>
   );
  */}
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