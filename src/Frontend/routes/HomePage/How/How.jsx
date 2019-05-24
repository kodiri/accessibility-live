import React from 'react';
import './How.css';
import happyGuyInWheelChairImg from '../../../Images/guy_weelchair.jpg';

export default function How() {
  return (
    <div className="How">
      <div className="How__Tittle">
        How it
        <span className="How__text--gold"> works </span>
?
      </div>
      <div className="How__Container__Flex">
        <div className="How__List">
          <p className="How__List__Item">
            <span className="How__List__Item--big">1. </span>
            Type start and final destination.
          </p>
          <p className="How__List__Item">
            <span className="How__List__Item--big">2. </span>
            Select your search mode. Currently, we have by postcode and by station name.
          </p>
          <p className="How__List__Item">
            <span className="How__List__Item--big">3. </span>
            Click on Search! And start your route!
          </p>
        </div>
        <img className="How__Photo" src={happyGuyInWheelChairImg} alt="wheelchair vs stairs" />
      </div>
    </div>
  );
}
