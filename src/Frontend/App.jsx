import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './css/App.css';
// Routes
import HomePage from './routes/HomePage/HomePage';
import SearchPage from './routes/SearchPage';
import DetailsPage from './routes/DetailsPage';
import AboutPage from './routes/AboutPage';
import Services from './component/AccessibilityServices/AccesibiltyServices'
//Components
import NavBar from './component/NavBar/NavBar';
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Search" component={SearchPage} />
          <Route exact path="/Details" component={DetailsPage} />
          <Route exact path="/AboutUs" component={AboutPage} />
          <Route exact path="/:Services" component={Services} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;