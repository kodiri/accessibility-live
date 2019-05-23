import React from "react";
import "./UsefulLinks.css";

function UsefulLinks() {
  return (
    <div className="UsefulLinks">
      <h1 className="Title">Useful Links</h1>
        <div className="innerUsefulLinks">
          <a
            href="http://citymapper.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Citymapper
          </a>
          <a
            href="https://tfl.gov.uk/transport-accessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transport Accessibility
          </a>
          <a
            href="https://tfl.gov.uk/transport-accessibility/wheelchair-access-and-avoiding-stairs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wheelchair Access & Avoiding Stairs
          </a>
          <a
            href="https://www.visitlondon.com/traveller-information/getting-around-london/accessible-public-transport"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessible Public Transport
          </a>
          <a
            href="https://data.london.gov.uk/dataset/public-transport-accessibility-levels"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Transport Accessibility Levels
          </a>
        </div>
    </div>
  );
}

export default UsefulLinks;
