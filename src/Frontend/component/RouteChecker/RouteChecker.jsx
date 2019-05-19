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
      PostCodeCB: true,
      tweets: '',
    };
  }

  handleCheckBoxChanges() {
    const { PostCodeCB } = this.state;
    this.setState({
      PostCodeCB: !PostCodeCB,
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  fetchTweets() {
    fetch('/api/tweets')
      .then(data => data.json())
      .then((tweets) => {
        this.setState({
          tweets,
        });
      });
  }

  handleSearchRoute() {
    const { from, to, PostCodeCB } = this.state;
    this.setState({ searching: false });
    this.fetchTweets();
    if (PostCodeCB) {
      fetch(`/api/tfl/PostCode/${from}/${to}`)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            data: data[0],
          });
        })
        .catch(err => console.log(err));
    } else {
      fetch(`/api/tfl/StationName/${from}/${to}`)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            data: data[0],
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const {
      from, to, searching, data, PostCodeCB, tweets,
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
          <div className="RouteChecker__CheckBoxes__Container">
            <div className="RouteChecker__CheckBoxes__item">
              <input
                type="checkbox"
                className="RouteChecker__CheckBoxes__item--checkbox"
                name="PostCodeCB"
                checked={PostCodeCB}
                onClick={() => this.handleCheckBoxChanges()}
              />
              <p className="RouteChecker__CheckBoxes__item--description">Seach by Post Code</p>
            </div>
            <div className="RouteChecker__CheckBoxes__item">
              <input
                className="RouteChecker__CheckBoxes__item--checkbox"
                type="checkbox"
                name="StationCB"
                checked={!PostCodeCB}
                onClick={() => this.handleCheckBoxChanges()}
              />
              <p className="RouteChecker__CheckBoxes__item--description">Seach by Station Name</p>
            </div>
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
      return <RouteDisplayer data={data} tweets={tweets} from={from} to={to} />;
    }
    return <div>Loading...</div>;
  }
}
