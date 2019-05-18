import React, { Component } from 'react';
import './RouteDisplayer.css';

export default class RouteDisplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.data,
      tweets: this.props.tweets,
      from: this.props.from,
      to: this.props.to,
    };
  }

  render() {
    const {
      messages, tweets, from, to,
    } = this.state;
    return (
      <div className="RouteDisplayer">
        <ul className="RouteDisplayer__List">
          <h3 className="RouteDisplayer__Title">{`Path from ${from} to ${to}:`}</h3>
          {messages.map((message, index) => (
            <li className="RouteDisplayer__Message" key={index}>
              {message}
            </li>
          ))}
        </ul>
        <ul className="RouteDisplayer__List">
          <h3 className="RouteDisplayer__Title">Last Updates:</h3>
          {tweets.map((tweet, index) => (
            <li className="RouteDisplayer__Message" key={index}>
              {tweet}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
