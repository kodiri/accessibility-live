import React, { Component } from 'react';
import './RouteDisplayer.css';

export default class RouteDisplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.data,
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="RouteDisplayer">
        <ul className="RouteDisplayer__List">
          <h3 className="RouteDisplayer__Title">Last Updates</h3>
          {messages.map((message, index) => (
            <li className="RouteDisplayer__Message" key={index}>
              {message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
