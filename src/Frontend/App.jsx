/* eslint-disable react/prefer-stateless-function */
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
  }
}

export default App;