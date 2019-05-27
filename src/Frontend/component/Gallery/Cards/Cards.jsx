import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'

const divStyle1 = {
  width: '360px',
  hiddenoverflow: '',
};

const Card = ({ service }) => {
  const { index, picture, title, description } = service;
  return (
    <div id={`card-${index}`} className="cardCss" style={divStyle1}>
        <img src={picture} alt={title} alt="Image" className="cardPic" />
        <div className="tags">
          <div className="travelTag"><p>Door to Door</p></div>
          <div className="title"><h1>{title}</h1></div>
          <div className="description"><p>{description}</p></div>
        </div>
        <a href="#0" className="readmeTag">Read More</a>
    </div>
  );
}
Card.propTypes = {
  service: PropTypes.object.isRequired
}

export default Card;