import React from 'react';
import './Member.css';

export default function Member({ photo, name, linkedIn }) {
  return (
    <div className="Member">
      <img className="Member__Img" src={photo} alt="name" />
      <p className="Member__Name">{name}</p>
      <a
        className="Member__LinkedIn"
        href={`https://www.linkedin.com/in/${linkedIn}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}
