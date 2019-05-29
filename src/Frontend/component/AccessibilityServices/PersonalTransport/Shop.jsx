import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class Shop extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Shopmobility </h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/8ge3h_retrieveasset.jpg" alt="Shopmobility" />

          <p>Shopmobility is a nationwide scheme that lends manual wheelchairs, powered wheelchairs, and scooters to people with limited mobility,
            thus allowing them to shop and visit leisure and commercial facilities within a town, city or shopping centre.</p>

          <p>The scheme is open to anyone with mobility impairments, be it permanent or temporary.
            Each local scheme operates slightly differently; some provide Shopmobility as a free service while others make a charge.</p>

          <h1>Contact</h1>

          <p>
            <ul>
              <li>Bluewater: 01322 476550</li>
              <li>Lakeside: 01708 869744</li>
              <li>Westfield: 020 33712402</li>
            </ul>
          </p>

          <p>
            <ul>
              <li>Barking: 020 8594 1687 (Vicarage Fields Shopping Centre)</li>
              <li>Beckenham: 020 8663 3345</li>
              <li>Bexleyheath: 020 8301 5237</li>
              <li>Bromley: 020 8313 0031 (The Glade Shopping Centre)</li>
              <li>Camden: 020 7482 5503</li>
              <li>Ealing: 020 8579 1724</li>
              <li>Enfield: 020 8379 1193</li>
              <li>Harrow: 020 8427 1200</li>
              <li>Hendon: 020 8457 4070 (Brent Cross Shopping Centre)</li>
              <li>Hounslow: 020 8570 3343 (The Blenheim Centre)</li>
              <li>Ilford: 020 8478 6864 (The Exchange Mall)</li>
              <li>Kensington & Chelsea: 020 8960 8774</li>
              <li>Kingston: 0208 547 1255</li>
              <li>Lewisham: 020 8297 2735</li>
              <li>Romford: 01708 722570 (The Brewery)</li>
              <li>Romford: 01708 765764 (The Liberty Shopping Centre)</li>
              <li>Staines: 01784 459 416 (Two Rivers Retail Park)</li>
              <li>Sutton: 020 8770 0691 (The St Nicholas Centre)</li>
              <li>Uxbridge: 01895 271510 (The Chimes Shopping Centre)</li>
              <li>Walthamstow: 020 8520 3366 (The Selbourne Walk Shopping Centre)</li>
              <li>Wandsworth: 020 8875 9585</li>
              <li>Wealdstone: 020 8427 1200</li>
              <li>Wimbledon: 020 3326 2524</li>
              <li>Wood Green: 020 8881 5402 (Library Shopping Mall)</li>
            </ul>
          </p>

          <div class="tags">
            <ul>
              <li>Personal</li>
              <li>Transport</li>
              <li>Accessible</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;