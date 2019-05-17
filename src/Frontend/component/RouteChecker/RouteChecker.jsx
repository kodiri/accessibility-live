import React, { Component } from 'react';
import './RouteChecker.css';
import RouteDisplayer from '../RouteDisplayer/RouteDisplayer';

export default class RouteChecker extends Component {
  constructor() {
    super();
    this.state = {
      searching: true,
      from: '',
      to: '',
      data: '',
    };
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSearchRoute() {
    const { from, to } = this.state;
    this.setState({ searching: false });
    fetch(`/api/tweets/${from}/${to}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      from, to, searching, data,
    } = this.state;
    if (searching) {
      return (
        <div className="RouteChecker">
          <h1 className="RouteChecker__Title">Where would you like to go today?</h1>
          <div className="RouteChecker__Inputs__Container">
            <input
              className="RouteChecker__Input"
              type="text"
              value={from}
              name="from"
              placeholder="From"
              onChange={e => this.handleInputChange(e)}
            />
            <input
              className="RouteChecker__Input"
              type="text"
              value={to}
              name="to"
              placeholder="To"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <button
            type="button"
            className="RouteChecker__Button"
            onClick={() => this.handleSearchRoute()}
          >
            Search
          </button>
        </div>
      );
    }
    if (data) {
      return <RouteDisplayer data={data} />;
    }
    return <div>Loading...</div>;
  }
}
