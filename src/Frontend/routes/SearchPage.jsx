import React from 'react';

import Twitter from '../component/Twitter/Twitter';
import RouteChecker from '../component/RouteChecker/RouteChecker';
import Cards from '../component/Cards/Cards';
import UsefulLinks from '../component/UsefulLinks/UsefulLinks';
import AboutUs from '../component/About/AboutUs';

export default function SearchPage() {
  return (
    <div className="SearchPage">
      <RouteChecker />
      <Cards />
      <Twitter />
      <UsefulLinks />
      <AboutUs />
    </div>
  );
}
