import React from 'react';
import './Member.css';

export default function Member({ photo, name }) {
  return (
    <div className="Member">
      <img className="Member__Img" src={photo} alt="name" />
      <p className="Member__Name">{name}</p>
    </div>
  );
}
