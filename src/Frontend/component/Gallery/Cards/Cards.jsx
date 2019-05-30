import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'
import {Link} from 'react-router-dom';

const divStyle1 = {
  width: '360px',
  hiddenoverflow: '',
};

const Card = ({ service }) => {
  const { index, picture, title, description, tag, pageLink } = service;
  return (
    <div id={`card-${index}`} className="cardCss" style={divStyle1}>
        <img src={picture} alt={title} alt="Image" className="cardPic" />
        <div className="tags">
          <div className="travelTag"><p>{tag}</p></div>
          <div className="title"><h1>{title}</h1></div>
          <div className="description"><p>{description}</p></div>
        </div>
        <Link to={pageLink} className="readmeTag">Read More</Link>
    </div>
  );
}
Card.propTypes = {
  service: PropTypes.object.isRequired
}

export default Card;