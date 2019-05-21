import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './css/App.css';
// Routes
import HomePage from './routes/HomePage/HomePage';
import SearchPage from './routes/SearchPage';
import UsefulLinksPage from './routes/UsefulLinksPage';
import AboutPage from './routes/AboutPage';
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
          <Route exact path="/UsefulLinks" component={UsefulLinksPage} />
          <Route exact path="/AboutUs" component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
