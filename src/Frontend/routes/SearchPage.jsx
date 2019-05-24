import React from 'react';

import RouteChecker from '../component/RouteChecker/RouteChecker';
import Cards from '../component/Gallery/Gallery';
import UsefulLinks from '../component/UsefulLinks/UsefulLinks';
import Details from '../component/Details/Details';

export default function SearchPage() {
  return (
    <div className="SearchPage">
      <RouteChecker />
      <Cards />
      <Details />
      <UsefulLinks />
    </div>
  );
}
